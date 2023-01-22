import {Component} from '@angular/core'
import {SlpNavigablePage} from '../../model/slp-navigable-page'
import {ElementSize, TextColor} from '@ezra-clients/common-ui'
import {SolutionsFacade} from '../../+state/solutions/solutions.facade'
import {Subject} from 'rxjs'
import {map} from 'rxjs/operators'
import {SolutionWidget} from '../../+state/solutions/solutions.models'
import {SlpNavigation} from '../../app-routing.module'
import {AuthService} from '../../services/auth.service'


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
    destroyed$ = new Subject<boolean>()
    solutionsLoading$ = this.solutionsFacade.loading$
    solutions$ = this.solutionsFacade.allSolutions$
    solutionCount$ = this.solutionsFacade.solutionCount$
    isAdmin$ = this.authService.idAdmin$
    searchText = ''
    loggedIn$ = this.authService.loggedIn$

    constructor(private readonly solutionsFacade: SolutionsFacade, private readonly authService: AuthService) {}

    filterWidgets(widget: SolutionWidget, searchText: string): boolean {
        return widget.solutionDto.label.toLowerCase().includes(searchText.toLowerCase())
    }

    getNextIndex() {
        return this.solutionsFacade.solutionIds$.pipe(
            map((ids) => {
                if (ids.length === 0) return 0
                const max = Math.max(...ids)
                for (let i = 0; i <= max; ++i) if (!ids.includes(i)) return i
                return max + 1
            })
        )
    }
}