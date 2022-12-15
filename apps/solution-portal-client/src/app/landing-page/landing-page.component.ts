import {Component} from '@angular/core'
import {SlpNavigablePage} from '../utility-files/slp-navigable-page'
import {SlpNavigation} from '../utility-files/slp-navigation'
import {SlpElementSize, SlpTextColor} from '../utility-files/slp-element-config'

@Component({
    selector: 'slp-landing-page',
    templateUrl: 'landing-page.component.html',
    styleUrls: ['landing-page.component.scss']
})
export class LandingPageComponent implements SlpNavigablePage {
    pageName = SlpNavigation.LANDING_PAGE
    buttonSize = SlpElementSize.VERY_LARGE
    buttonTextColor = SlpTextColor.WHITE
}