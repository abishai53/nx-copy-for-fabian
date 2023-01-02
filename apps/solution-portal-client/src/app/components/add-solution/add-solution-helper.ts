import {AbstractControl, FormBuilder, Validators} from '@angular/forms'
import {DocumentationExt, ImageExt} from '@ezra-clients/common-ui'

export function getExt(fileName: string): string {
    const ext = fileName.split('.')?.pop()
    return ext === undefined ? '' : ext
}

export function validateImage(control: AbstractControl) {
    return control.value && !ImageExt.includes(getExt(control.value)) ? {'invalidImageExtension': true} : null
}

export function validateDocument(control: AbstractControl) {
    return control.value && !DocumentationExt.includes(getExt(control.value)) ? {'invalidFileExtension': true} : null
}

export enum AddFormErrors {
    InvalidImageExtension = 'invalidImageExtension',
    InvalidFileExtension = 'invalidFileExtension'
}


export const maxLen = {'url': 200, 'label': 30, 'description': 400}
export const minLen = {'url': 15, 'label': 5, 'description': 50}

const fb = new FormBuilder()

export const InitialFormGroup = fb.nonNullable.group({

    auth: [true, [Validators.required]],

    coverImage: ['', [Validators.required, validateImage]],

    documentation: ['', [Validators.required, validateDocument]],

    index: fb.nonNullable.control({value: 0, disabled: true}, Validators.required),

    documentationText: fb.nonNullable.control({value: 'Upload Documentation', disabled: true}),

    sys_name: fb.nonNullable.control({value: '', disabled: true}, Validators.required),

    label: [
        '',
        [
            Validators.required,
            Validators.maxLength(maxLen.label),
            Validators.minLength(minLen.label)
        ]
    ],

    url: [
        '',
        [
            Validators.required,
            Validators.maxLength(maxLen.url),
            Validators.minLength(minLen.url)
        ]
    ],

    description: [
        '',
        [
            Validators.required,
            Validators.maxLength(maxLen.description),
            Validators.minLength(minLen.description)
        ]
    ]
})