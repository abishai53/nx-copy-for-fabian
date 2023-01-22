import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'max'})
export class MaxPipe implements PipeTransform {
    transform(items: any[] | null, getMaxFunction?: any): any {
        if (!items) return undefined
        if (!getMaxFunction) return Math.max(...items)
        return getMaxFunction(items)
    }
}