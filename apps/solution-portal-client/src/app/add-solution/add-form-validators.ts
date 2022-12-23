import {AbstractControl} from '@angular/forms'
import {DocumentationExt, ImageExt} from '@ezra-clients/common-ui'

export function validateImage(control: AbstractControl) {
    const imageExtOptions = Object.keys(ImageExt)
    return imageExtOptions.includes(getExt(control.value)) ? null : {'invalidImageExtension': true}
}
export function validateDocument(control: AbstractControl) {
    const docExtOptions = Object.keys(DocumentationExt)
    return docExtOptions.includes(getExt(control.value)) ? null : {'invalidFileExtension': true}
}
export function getExt(fileName: string): string {
    const ext = fileName.split('.')?.pop()
    return ext === undefined ? '' : ext
}