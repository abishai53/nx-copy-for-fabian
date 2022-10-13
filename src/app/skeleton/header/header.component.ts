import {Component, Input} from '@angular/core'
import {Pages} from '../../../shared/pages'

@Component({
    selector: 'ptf-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
    userName = 'Ezra Orina'
    pages = Pages

    @Input() currentPage = ''
}