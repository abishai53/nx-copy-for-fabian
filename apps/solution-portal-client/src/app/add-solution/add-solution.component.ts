import {Component, OnInit} from '@angular/core'
import {SlpNavigablePage} from '../../model/slp-navigable-page'
import {SlpNavigation} from '../../model/slp-navigation'
import {NonNullableFormBuilder, Validators} from '@angular/forms'
import {Location} from '@angular/common'
import {SolutionService} from '../../service/solution-service'
import {createSolution} from '../../model/solution'
import {DocumentationExt, ImageExt} from '@ezra-clients/common-ui'
import {take} from 'rxjs'
import {getExt, validateDocument, validateImage} from './add-form-validators'

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
    imageExtOptions = Object.keys(ImageExt)
    docExtOptions = Object.keys(DocumentationExt)
    showImageError = false
    showDocError = false

    formGroup = this.fb.group({
        coverImage: ['', [Validators.required, validateImage]],
        label: ['', [Validators.required, Validators.maxLength(30)]],
        url: ['', [Validators.required, Validators.maxLength(200)]],
        index: [0, [Validators.required]],
        auth: [true, [Validators.required]],
        description: ['', [Validators.required, Validators.maxLength(400)]],
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
        private fb: NonNullableFormBuilder,
        private location: Location,
        private solutionService: SolutionService
    ) {}

    ngOnInit() {
        this.initialize()
    }

    initialize = () => {
        this.url = this.defaultUrl
        this.imageFileName = 'No Image Selected'
        this.formGroup.reset()
    }

    back = () => this.location.back()

    onImageUpload(event: any): void {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            this.imageFileName = file.name

            if (this.formGroup.controls.coverImage.invalid) {
                this.showImageError = true
                this.url = this.defaultUrl

            } else {
                this.showImageError = false
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
            this.showDocError = this.formGroup.controls.documentation.invalid
            this.documentationFileName = file.name
        }
    }

    setSysName(event: any): void {
        const label: string = event.target.value
        this.formGroup.controls.sysName.setValue(label
            .toLowerCase()
            .split(' ')
            .join('_'))
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

        this.solutionService.saveSolution(newSolution)
        .pipe(take(1))
        .subscribe({
            next: () => this.initialize(),
            error: error => console.log(error)
        })
    }

}