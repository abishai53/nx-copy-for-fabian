import {AbstractControl} from '@angular/forms'
import {DocumentationExt, ImageExt} from '@ezra-clients/common-ui'

export function getExt(fileName: string): string {
    const ext = fileName.split('.')?.pop()
    return ext === undefined ? '' : ext
}

export function validateImage(control: AbstractControl) {
    const imageExtOptions = Object.keys(ImageExt)
    return control.value && !imageExtOptions.includes(getExt(control.value)) ? {'invalidImageExtension': true} : null
}

export function validateDocument(control: AbstractControl) {
    const docExtOptions = Object.keys(DocumentationExt)
    return control.value && !docExtOptions.includes(getExt(control.value)) ? {'invalidFileExtension': true} : null
}

export enum AddFormErrors {
    invalidImageExtension = 'invalidImageExtension',
    invalidFileExtension = 'invalidFileExtension'
}
