import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core'
import {SlpNavigablePage} from '../../model/slp-navigable-page'
import {SlpNavigation} from '../../model/slp-navigation'
import {ElementSize, TextColor} from '@ezra-clients/common-ui'
import {SolutionsFacade} from '../../+state/solutions/solutions.facade'
import {map, takeUntil} from 'rxjs/operators'
import {Subject} from 'rxjs'
import {SolutionWidget} from '../../+state/solutions/solutions.models'

@Component({
    selector: 'slp-landing-page',
    templateUrl: 'landing-page.component.html',
    styleUrls: ['landing-page.component.scss']
})
export class LandingPageComponent implements SlpNavigablePage, OnInit, OnDestroy {
    pageName = SlpNavigation.LANDING_PAGE
    pages = SlpNavigation
    buttonSize = ElementSize.VERY_LARGE
    buttonTextColor = TextColor.WHITE
    destroyed$ = new Subject<boolean>()
    solutionsLoading$ = this.solutionsFacade.loading$
    solutions$ = this.solutionsFacade.allSolutions$
    solutionCount = 0
    loggedIn = false
    isAdmin = false
    searchText = ''

    constructor(private readonly solutionsFacade: SolutionsFacade) {}

    ngOnInit(): void {
        this.solutionsFacade.solutionCount$.pipe(
            takeUntil(this.destroyed$),
            map((count) => this.solutionCount = count)
        ).subscribe()
    }

    ngOnDestroy(): void {
        this.destroyed$.next(true)
        this.destroyed$.complete()
    }

    filterWidgets(a: SolutionWidget, searchText: string): boolean {
        return a.solutionDto.label.toLowerCase().includes(searchText.toLowerCase())
    }

    toggleLoggedIn = () => this.loggedIn = !this.loggedIn
    toggleAdmin = () => this.isAdmin = !this.isAdmin
}