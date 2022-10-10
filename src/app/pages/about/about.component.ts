import {Component} from '@angular/core'
import {Pages} from '../../../shared/pages'
import {NavigablePage} from '../navigable-page'

@Component({
    selector: 'ptf-about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss']
})
export class AboutComponent implements NavigablePage {
    pageName = Pages.ABOUT
}
