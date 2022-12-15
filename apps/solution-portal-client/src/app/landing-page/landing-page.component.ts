import {Component} from '@angular/core'
import {SlpNavigablePage} from '../utility-files/slp-navigable-page'
import {SlpNavigation} from '../utility-files/slp-navigation'

@Component({
    selector: 'slp-landing-page',
    templateUrl: 'landing-page.component.html',
    styleUrls: ['landing-page.component.scss']
})
export class LandingPageComponent implements SlpNavigablePage {
    pageName = SlpNavigation.LANDING_PAGE
}