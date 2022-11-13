import {Component} from '@angular/core'
import { Navigable } from '../ptf-shared/utility-files/navigable'
import {Navigation} from '../ptf-shared/utility-files/navigation'

@Component({
    selector: 'ptf-about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss']
})
export class AboutComponent implements Navigable {
    pageName = Navigation.ABOUT
}
