import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms'
import {DocumentationExt, ImageExt} from '@ezra-clients/common-ui'
import {SolutionsEntity} from '../../+state/solutions/solutions.models'

export function getExt(fileName?: string): string {
    const ext = fileName?.split('.')?.pop()
    return ext === undefined ? '' : ext
}

export function validateImageExt(control: AbstractControl) {
    return control.value && !ImageExt.includes(getExt(control.value)) ? {'invalidImageExtension': true} : null
}

export function validateDocumentExt(control: AbstractControl) {
    return control.value && !DocumentationExt.includes(getExt(control.value)) ? {'invalidFileExtension': true} : null
}

export enum SolutionFormErrors {
    InvalidImageExtension = 'invalidImageExtension',
    InvalidFileExtension = 'invalidFileExtension'
}


export const maxLen = {'url': 200, 'label': 30, 'description': 400}
export const minLen = {'url': 15, 'label': 5, 'description': 50}

const fb = new FormBuilder()

export function initializeSolutionForm(solution?: SolutionsEntity): FormGroup {
    const docName = solution ? `${solution?.sys_name}.${solution?.documentation_ext}` : undefined

    return fb.nonNullable.group({

        coverImage: '',

        documentation: '',

        sys_id: [solution?.sys_id],

        auth: [solution?.authentication_required || false, [Validators.required]],

        index: fb.nonNullable.control({value: solution?.index || 0, disabled: true}, Validators.required),

        documentationText: fb.nonNullable.control({value: docName || 'Upload Documentation', disabled: true}),

        sys_name: fb.nonNullable.control({value: solution?.sys_name, disabled: true}, Validators.required),

        label: [
            solution?.label,
            [
                Validators.required,
                Validators.maxLength(maxLen.label),
                Validators.minLength(minLen.label)
            ]
        ],

        url: [
            solution?.url,
            [
                Validators.required,
                Validators.maxLength(maxLen.url),
                Validators.minLength(minLen.url)
            ]
        ],

        description: [
            solution?.description,
            [
                Validators.required,
                Validators.maxLength(maxLen.description),
                Validators.minLength(minLen.description)
            ]
        ]
    })
}