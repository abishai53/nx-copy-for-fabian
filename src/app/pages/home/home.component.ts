import {Component} from '@angular/core'
import {Pages} from '../../../shared/pages'
import {NavigablePage} from '../navigable-page'

@Component({
    selector: 'ptf-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements NavigablePage {
    pageName = Pages.HOME
}