import {Component, OnInit} from '@angular/core'
import {SlpNavigablePage} from '../../model/slp-navigable-page'
import {SlpNavigation} from '../../model/slp-navigation'
import {NonNullableFormBuilder, Validators} from '@angular/forms'
import {Location} from '@angular/common'
import {documentationExt, imageExt} from '@ezra-clients/common-ui'
import {AddFormErrors, getExt, validateDocument, validateImage} from './add-form-validators'
import {createSolution} from '../../+state/solutions/solutions.models'
import {SolutionsFacade} from '../../+state/solutions/solutions.facade'
import * as SolutionsActions from '../../+state/solutions/solutions.actions'

@Component({
    selector: 'slp-add-solution',
    templateUrl: 'add-solution.component.html',
    styleUrls: ['add-solution.component.scss']
})
export class AddSolutionComponent implements SlpNavigablePage, OnInit {
    pageName = SlpNavigation.ADD_SOLUTION
    defaultUrl = 'assets/default-cover-image.svg'
    url: any = ''
    imageFileName = ''
    documentationFileName = ''
    uploadedImageExt = ''
    uploadedDocumentExt = ''
    imageExtOptions = imageExt
    docExtOptions = documentationExt
    addFormErrors = AddFormErrors
    errors = new Map<AddFormErrors, boolean>([
        [AddFormErrors.invalidFileExtension, false],
        [AddFormErrors.invalidImageExtension, false]
    ])
    maxLen = {'url': 200, 'label': 30, 'description': 400}

    formGroup = this.fb.group({
        coverImage: ['', [Validators.required, validateImage]],
        label: ['', [Validators.required, Validators.maxLength(this.maxLen['label'])]],
        url: ['', [Validators.required, Validators.maxLength(this.maxLen['url'])]],
        index: [0, [Validators.required]],
        auth: [true, [Validators.required]],
        description: ['', [Validators.required, Validators.maxLength(this.maxLen['description'])]],
        documentation: ['', [Validators.required, validateDocument]],

        documentationText: this.fb.control({
            value: 'Upload Documentation',
            disabled: true
        }),
        sysName: this.fb.control({
            value: '',
            disabled: true
        }, Validators.required)
    })

    constructor(
        private readonly fb: NonNullableFormBuilder,
        private readonly location: Location,
        private readonly solutionFacade: SolutionsFacade) {}

    ngOnInit() {
        this.initialize()
        this.formGroup.valueChanges.subscribe(() => this.updateFormErrors())
    }

    initialize = () => {
        this.url = this.defaultUrl
        this.imageFileName = 'No Image Selected'
        this.formGroup.reset()
    }

    back = () => this.location.back()

    updateFormErrors = () => {
        const imageErrors = this.formGroup.controls.coverImage.errors
        const docErrors = this.formGroup.controls.documentation.errors

        this.errors.set(
            AddFormErrors.invalidImageExtension,
            imageErrors ? imageErrors[AddFormErrors.invalidImageExtension] === true : false
        )

        this.errors.set(
            AddFormErrors.invalidFileExtension,
            docErrors ? docErrors[AddFormErrors.invalidFileExtension] === true : false
        )

        this.url = this.formGroup.controls.coverImage.invalid ? this.defaultUrl : this.url
    }

    onImageUpload(event: any): void {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            this.imageFileName = file.name

            if (!this.formGroup.controls.coverImage.invalid) {
                this.uploadedImageExt = getExt(file.name)
                const reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = (event) => this.url = event.target?.result
            }
        }
    }

    onFileUpload(event: any): void {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            this.uploadedDocumentExt = getExt(file.name)
            this.documentationFileName = file.name
        }
    }

    setSysName(event: any): void {
        const label: string = event.target.value
        this.formGroup.controls.sysName.setValue(
            label
                .trim()
                .toLowerCase()
                .split(' ')
                .join('_')
        )
    }

    registerSolution(): void {
        const newSolution = createSolution({
            authentication_required: this.formGroup.value.auth,
            description: this.formGroup.value.description,
            documentation_ext: this.uploadedDocumentExt,
            image_ext: this.uploadedImageExt,
            index: this.formGroup.value.index,
            label: this.formGroup.value.label,
            sys_name: this.formGroup.getRawValue().sysName,
            url: this.formGroup.value.url
        })

        this.solutionFacade.dispatch(SolutionsActions.startAddingSolution({solution: newSolution}))
    }
}