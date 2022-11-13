import {Component} from '@angular/core'
import {Navigation} from '../ptf-shared/utility-files/navigation'
import {Navigable} from '../ptf-shared/utility-files/navigable'

@Component({
    selector: 'ptf-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements Navigable {
    pageName = Navigation.HOME
    pages = Navigation
}
