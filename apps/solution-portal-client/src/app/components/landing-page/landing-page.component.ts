import {Component} from '@angular/core'
import {SlpNavigablePage} from '../../model/slp-navigable-page'
import {SlpNavigation} from '../../model/slp-navigation'
import {ElementSize, TextColor} from '@ezra-clients/common-ui'
import {SolutionsFacade} from '../../+state/solutions/solutions.facade'

@Component({
    selector: 'slp-landing-page',
    templateUrl: 'landing-page.component.html',
    styleUrls: ['landing-page.component.scss']
})
export class LandingPageComponent implements SlpNavigablePage {
    pageName = SlpNavigation.LANDING_PAGE
    pages = SlpNavigation
    buttonSize = ElementSize.VERY_LARGE
    buttonTextColor = TextColor.WHITE
    solutionsLoading$ = this.solutionsFacade.loading$
    solutions$ = this.solutionsFacade.allSolutions$

    constructor(private readonly solutionsFacade: SolutionsFacade) {}
}