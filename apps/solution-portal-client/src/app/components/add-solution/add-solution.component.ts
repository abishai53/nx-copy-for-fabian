import {Component, OnDestroy, OnInit} from '@angular/core'
import {SlpNavigablePage} from '../../model/slp-navigable-page'
import {SlpNavigation} from '../../model/slp-navigation'
import {Location} from '@angular/common'
import {DocumentationExt, ImageExt} from '@ezra-clients/common-ui'
import {SolutionsFacade} from '../../+state/solutions/solutions.facade'
import * as SolutionsActions from '../../+state/solutions/solutions.actions'
import {distinctUntilChanged, filter, Subject, tap} from 'rxjs'
import {map, takeUntil} from 'rxjs/operators'
import {MessageService} from 'primeng/api'
import {InitialFormGroup, maxLen, minLen, AddFormErrors} from './add-solution-helper'
import {SolutionService} from '../../services/solution-service'
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'slp-add-solution',
    templateUrl: 'add-solution.component.html',
    styleUrls: ['add-solution.component.scss'],
    providers: [MessageService]
})
export class AddSolutionComponent implements SlpNavigablePage, OnInit, OnDestroy {
    destroyed$ = new Subject<boolean>()
    pageName = SlpNavigation.ADD_SOLUTION
    defaultUrl = 'assets/default-cover-image.svg'
    errorMessage = ''
    coverImageUrl: any = ''
    minLen = minLen
    maxLen = maxLen
    imageExtOptions = ImageExt
    docExtOptions = DocumentationExt
    addFormErrors = AddFormErrors
    formGroup = InitialFormGroup
    coverImage = {file: {} as File, name: ''}
    documentation = {file: {} as File, name: ''}

    errors = new Map<AddFormErrors, boolean>([
        [AddFormErrors.InvalidFileExtension, false],
        [AddFormErrors.InvalidImageExtension, false]
    ])

    constructor(
        private readonly location: Location,
        private readonly solutionFacade: SolutionsFacade,
        private readonly messageService: MessageService,
        private readonly solutionService: SolutionService,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.initialize()
        this.formGroup.valueChanges.subscribe(() => this.updateFormErrors())
        const nextIndex = Number(this.route.snapshot.paramMap.get('index'))
        this.formGroup.controls.index.setValue(nextIndex)
    }

    ngOnDestroy() {
        this.destroyed$.next(true)
        this.destroyed$.complete()
    }

    initialize = () => {
        this.coverImageUrl = this.defaultUrl
        this.formGroup.reset()
        this.coverImage = {file: {} as File, name: 'No Image Selected'}
    }

    back = () => this.location.back()

    updateFormErrors() {
        const imageErrors = this.formGroup.controls.coverImage.errors
        const docErrors = this.formGroup.controls.documentation.errors

        this.errors.set(
            AddFormErrors.InvalidImageExtension,
            imageErrors ? imageErrors[AddFormErrors.InvalidImageExtension] === true : false
        )

        this.errors.set(
            AddFormErrors.InvalidFileExtension,
            docErrors ? docErrors[AddFormErrors.InvalidFileExtension] === true : false
        )

        this.coverImageUrl = imageErrors ? this.defaultUrl : this.coverImageUrl
    }

    onImageUpload(event: any): void {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            this.coverImage = {file, name: file.name}

            if (!this.errors.get(AddFormErrors.InvalidImageExtension)) {
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => this.coverImageUrl = reader.result
            }
        }
    }

    onFileUpload(event: any): void {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            this.documentation = {file, name: file.name}
        }
    }

    setSysName(event: any): void {
        const label: string = event.target.value
        this.formGroup.controls.sys_name.setValue(
            label
                .trim()
                .toLowerCase()
                .split(' ')
                .join('_')
        )
    }

    registerSolution(): void {
        const solutionFormData: FormData =
            this.solutionService.createSolutionFormData(this.formGroup, this.coverImage.file, this.documentation.file)

        this.destroyed$.next(true)
        this.messageService.clear()
        this.messageService.add({severity: 'info', summary: 'Saving', detail: 'Solution is being saved...'})
        this.solutionFacade.dispatch(SolutionsActions.startAddingSolution({solution: solutionFormData}))
        window.scrollTo(0, 0)
        this.checkAddStatus()
    }

    private checkAddStatus() {
        this.solutionFacade.solutionStatus$.pipe(
            takeUntil(this.destroyed$),
            map((status) => {
                const label = this.formGroup.controls.label.value
                if (status === 'success' && label) {
                    const successMessage = `${label} has been saved`
                    this.messageService.add({severity: 'success', summary: 'Success', detail: successMessage})
                    this.initialize()
                } else if (status === 'error') this.setErrorMessage()
            })).subscribe()
    }

    private setErrorMessage() {
        this.solutionFacade.solutionsError$.pipe(
            takeUntil(this.destroyed$),
            map((error) => error.error.error),
            distinctUntilChanged((prev, curr) => prev === curr),
            filter((errorMessage) => errorMessage !== null),
            tap((errorMessage) => {
                errorMessage = errorMessage ? errorMessage : 'An error occured'
                this.messageService.add({severity: 'error', summary: 'Error', detail: errorMessage})
            })
        ).subscribe()
    }
}