import {AbstractControl} from '@angular/forms'
import {documentationExt, imageExt} from '@ezra-clients/common-ui'

export function getExt(fileName: string): string {
    const ext = fileName.split('.')?.pop()
    return ext === undefined ? '' : ext
}

export function validateImage(control: AbstractControl) {
    return control.value && !imageExt.includes(getExt(control.value)) ? {'invalidImageExtension': true} : null
}

export function validateDocument(control: AbstractControl) {
    return control.value && !documentationExt.includes(getExt(control.value)) ? {'invalidFileExtension': true} : null
}

export enum AddFormErrors {
    invalidImageExtension = 'invalidImageExtension',
    invalidFileExtension = 'invalidFileExtension'
}
