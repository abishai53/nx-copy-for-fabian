import {Component} from '@angular/core'
import {Navigation} from '../../shared-components/navigation'
import {NavigablePage} from '../navigable-page'

@Component({
    selector: 'ptf-about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss']
})
export class AboutComponent implements NavigablePage {
    pageName = Navigation.ABOUT
}
