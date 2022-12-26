import {Injectable} from '@angular/core'
import {Store} from '@ngrx/store'
import * as SolutionsActions from './solutions.actions'
import * as SolutionsSelectors from './solutions.selectors'

@Injectable()
export class SolutionsFacade {
    constructor(private readonly store: Store) {}

    loading$ = this.store.select(SolutionsSelectors.solutionsAreLoading)
    allSolutions$ = this.store.select(SolutionsSelectors.getAllSolutions)
    solutionsErrorMessage$ = this.store.select(SolutionsSelectors.getSolutionsErrorMessage)

    init() {
        this.store.dispatch(SolutionsActions.initSolutions())
    }
}
