import {Component, OnDestroy, OnInit} from '@angular/core'
import {SlpNavigablePage} from '../../model/slp-navigable-page'
import {Location} from '@angular/common'
import {DocumentationExt, ImageExt} from '@ezra-clients/common-ui'
import {SolutionsFacade} from '../../+state/solutions/solutions.facade'
import * as SolutionsActions from '../../+state/solutions/solutions.actions'
import {distinctUntilChanged, filter, Subject, tap} from 'rxjs'
import {map, takeUntil} from 'rxjs/operators'
import {MessageService} from 'primeng/api'
import * as SolutionHelpers from './solution-form-helper'
import {SolutionService} from '../../services/solution.service'
import {ActivatedRoute} from '@angular/router'
import {SolutionsEntity} from '../../+state/solutions/solutions.models'
import {FormMode} from '../../model/solution-form-mode'
import {Validators} from '@angular/forms'
import {SlpNavigation} from '../../app-routing.module'

@Component({
    selector: 'slp-solution-form',
    templateUrl: 'solution-form.component.html',
    styleUrls: ['solution-form.component.scss'],
    providers: [MessageService]
})
export class SolutionFormComponent implements SlpNavigablePage, OnInit, OnDestroy {
    destroyed$ = new Subject<boolean>()
    pageName = SlpNavigation.SOLUTION_FORM
    defaultUrl = 'assets/default-cover-image.svg'
    errorMessage = ''
    coverImageUrl: any = ''
    minLen = SolutionHelpers.minLen
    maxLen = SolutionHelpers.maxLen
    imageExtOptions = ImageExt
    docExtOptions = DocumentationExt
    addFormErrors = SolutionHelpers.SolutionFormErrors
    coverImage = {file: {} as File, name: '', touched: false}
    documentation = {file: {} as File, name: '', touched: false}
    buttonLabels = {'save': 'Register Solution', 'cancel': 'Go Back', 'delete': 'Delete Solution'}
    disableDelete = true
    formGroup = SolutionHelpers.initializeSolutionForm()
    solution?: SolutionsEntity
    formMode = FormMode.ADD
    nextIndex = 0

    errors = new Map<SolutionHelpers.SolutionFormErrors, boolean>([
        [SolutionHelpers.SolutionFormErrors.InvalidFileExtension, false],
        [SolutionHelpers.SolutionFormErrors.InvalidImageExtension, false]
    ])

    constructor(
        private readonly location: Location,
        private readonly solutionFacade: SolutionsFacade,
        private readonly messageService: MessageService,
        private readonly solutionService: SolutionService,
        private readonly route: ActivatedRoute) {}

    ngOnInit() {
        this.route.queryParamMap.pipe(
            takeUntil(this.destroyed$),
            map((param) => {
                this.nextIndex = Number(param.get('index'))
                this.formMode = param.get('mode') as FormMode
                this.formMode === FormMode.EDIT ? this.initializeEditMode() : this.initializeAddMode()
            })
        ).subscribe()

        this.formGroup.valueChanges.pipe(
            takeUntil(this.destroyed$),
            map(() => this.checkForFormErrors())
        ).subscribe()
    }

    ngOnDestroy() {
        this.destroyed$.next(true)
        this.destroyed$.complete()
    }

    onImageUpload(event: any): void {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            this.coverImage = {file, name: file.name, touched: true}

            if (!this.errors.get(SolutionHelpers.SolutionFormErrors.InvalidImageExtension)) {
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => this.coverImageUrl = reader.result
            }
        }
    }

    onFileUpload(event: any): void {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            this.documentation = {file, name: file.name, touched: true}
        }
    }

    setSysName(event: any): void {
        const label: string = event.target.value
        this.formGroup.controls['sys_name'].setValue(
            label
                .trim()
                .toLowerCase()
                .split(' ')
                .join('_')
        )
    }

    submitSolution(): void {
        const solutionFormData: FormData = this.solutionService.createSolutionFormData(
            this.formGroup,
            this.coverImage.touched ? SolutionHelpers.getExt(this.coverImage.name) : this.solution?.image_ext,
            this.documentation.touched ?
                SolutionHelpers.getExt(this.documentation.name) :
                this.solution?.documentation_ext,
            this.coverImage.touched ? this.coverImage.file : undefined,
            this.coverImage.touched ? this.documentation.file : undefined
        )

        this.messageService.clear()
        this.destroyed$.next(true)
        this.messageService.add({severity: 'info', summary: 'Saving', detail: 'Solution is being saved...'})
        const action = this.formMode === FormMode.EDIT ? 'edit' : 'add'
        this.solutionFacade.dispatch(
            action === 'edit' ?
                SolutionsActions.startUpdatingSolution({solution: solutionFormData}) :
                SolutionsActions.startAddingSolution({solution: solutionFormData})
        )
        window.scrollTo(0, 0)
        this.checkApiStatus(action)
    }

    deleteSolution(): void {
        this.messageService.clear()
        this.destroyed$.next(true)
        this.messageService.add({severity: 'info', summary: 'Deleting', detail: 'Solution is being deleted...'})
        const payLoad = {index: this.formGroup.getRawValue().index, id: this.formGroup.value.sys_id}
        this.solutionFacade.dispatch(SolutionsActions.startDeletingSolution({id: payLoad.id, index: payLoad.index}))
        window.scrollTo(0, 0)
        this.checkApiStatus('delete')
    }

    back = () => this.location.back()

    addCoverImageValidators() {
        this.formGroup.controls['coverImage'].addValidators([
            Validators.required,
            SolutionHelpers.validateImageExt
        ])
    }

    addDocumentationValidators() {
        this.formGroup.controls['documentation'].addValidators([
            Validators.required,
            SolutionHelpers.validateDocumentExt
        ])
    }

    private checkApiStatus(action?: 'add' | 'edit' | 'delete') {
        this.solutionFacade.solutionStatus$.pipe(
            takeUntil(this.destroyed$),
            map(status => {
                if (status === 'success') {
                    const label = this.formGroup.controls['label'].value
                    const result = action === 'edit' ? 'Updated' : action === 'add' ? 'Saved' : 'deleted'
                    const successMessage = `${label} has been ${result}`
                    this.messageService.add({severity: 'success', summary: 'Success', detail: successMessage})
                    setTimeout(() => this.back(), 800)
                } else if (status === 'error') this.setErrorMessage()
            })).subscribe()
    }

    private setErrorMessage() {
        this.solutionFacade.solutionsError$.pipe(
            takeUntil(this.destroyed$),
            map(error => error.error.error),
            distinctUntilChanged((prev, curr) => prev === curr),
            filter(errorMessage => errorMessage !== null),
            tap(errorMessage => {
                errorMessage = errorMessage ? errorMessage : 'An error occured'
                this.messageService.add({severity: 'error', summary: 'Error', detail: errorMessage})
            })
        ).subscribe()
    }

    private checkForFormErrors() {
        const imageErrors = this.formGroup.controls['coverImage'].errors
        const docErrors = this.formGroup.controls['documentation'].errors

        this.errors.set(
            SolutionHelpers.SolutionFormErrors.InvalidImageExtension,
            imageErrors ? imageErrors[SolutionHelpers.SolutionFormErrors.InvalidImageExtension] === true : false
        )

        this.errors.set(
            SolutionHelpers.SolutionFormErrors.InvalidFileExtension,
            docErrors ? docErrors[SolutionHelpers.SolutionFormErrors.InvalidFileExtension] === true : false
        )

        this.coverImageUrl = imageErrors ? this.defaultUrl : this.coverImageUrl
    }

    private initializeAddMode() {
        this.formGroup.reset()
        this.formGroup.controls['index'].setValue(this.nextIndex)
        this.coverImageUrl = this.defaultUrl
        this.coverImage = {file: {} as File, name: 'No Image Selected', touched: false}
        this.addCoverImageValidators()
        this.addDocumentationValidators()
    }

    private initializeEditMode() {
        this.solution = history.state.solution as SolutionsEntity
        this.coverImageUrl = history.state.coverImageUrl
        this.formGroup = SolutionHelpers.initializeSolutionForm(this.solution)
        this.buttonLabels.save = 'Submit Edit'
        this.disableDelete = false
        this.coverImage = {
            file: {} as File,
            name: `${this.solution.sys_name}.${this.solution.image_ext}`,
            touched: false
        }
    }
}