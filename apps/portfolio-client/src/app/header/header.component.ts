import {Component, Input} from '@angular/core'
import {Navigation} from '../utility-files/navigation'

@Component({
    selector: 'ptf-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
    userName = 'Ezra Orina'
    pages = Navigation

    @Input() currentPage = ''
}