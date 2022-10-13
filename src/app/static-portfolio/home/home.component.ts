import {Component} from '@angular/core'
import {Navigation} from '../../shared-components/navigation'
import {NavigablePage} from '../navigable-page'

@Component({
    selector: 'ptf-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements NavigablePage {
    pageName = Navigation.HOME
    pages = Navigation
}
