import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    transform(items: any[] | null, searchTerm: string, filterFunction: any): any[] {
        if (!items) return []
        if (!searchTerm) return items
        return items.filter(it => filterFunction(it, searchTerm))
    }
}