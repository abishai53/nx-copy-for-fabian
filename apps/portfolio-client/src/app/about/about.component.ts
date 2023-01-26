import {Component} from '@angular/core'
import {Navigation} from '../utility-files/navigation'
import {NavigablePage} from '../utility-files/navigable-page'

@Component({
    selector: 'ptf-about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss']
})
export class AboutComponent implements NavigablePage {
    pageName = Navigation.ABOUT
}
