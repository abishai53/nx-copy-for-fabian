import {Component} from '@angular/core'
import {SlpNavigablePage} from '../model/slp-navigable-page'
import {SlpNavigation} from '../model/slp-navigation'
import {FormBuilder, Validators} from '@angular/forms'
import {Location} from '@angular/common'

@Component({
    selector: 'slp-add-solution',
    templateUrl: 'add-solution.component.html',
    styleUrls: ['add-solution.component.scss']
})
export class AddSolutionComponent implements SlpNavigablePage {
    pageName = SlpNavigation.ADD_SOLUTION
    url: any = 'assets/default-cover-image.svg'
    imageFileName = ''
    documentationFileName = ''

    formGroup = this.fb.group({
        coverImage: ['', [Validators.required]],
        label: ['', [Validators.required, Validators.maxLength(30)]],
        url: ['', [Validators.required, Validators.maxLength(200)]],
        index: ['', [Validators.required]],
        auth: [true, [Validators.required]],
        description: ['', [Validators.required, Validators.maxLength(400)]],
        documentation: ['', [Validators.required]],
        documentationText: this.fb.control({value: 'Upload Documentation', disabled: true}),
        sysName: this.fb.control({
            value: '',
            disabled: true
        }, Validators.required)
    })

    constructor(
        private fb: FormBuilder,
        private location: Location
    ) {}

    back(): void {
        this.location.back()
    }

    onImageUpload(event: any) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            this.imageFileName = file.name
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (event) => {
                this.url = event.target?.result
            }
        }
    }

    onFileUpload(event: any): void {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            this.documentationFileName = file.name
        }
    }

    setSysName(event: any): void {
        const label: string = event.target.value
        this.formGroup.controls.sysName.setValue(label.toLowerCase().split(' ')
            .join('_'))
    }

    registerSolution(): void {

    }
}