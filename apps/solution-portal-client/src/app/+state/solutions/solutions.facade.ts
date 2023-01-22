import {Injectable} from '@angular/core'
import {Action, Store} from '@ngrx/store'
import * as SolutionsActions from './solutions.actions'
import * as SolutionsSelectors from './solutions.selectors'

@Injectable()
export class SolutionsFacade {
    constructor(private readonly store: Store) {}

    loading$ = this.store.select(SolutionsSelectors.solutionsAreLoading)
    allSolutions$ = this.store.select(SolutionsSelectors.getAllSolutions)
    solutionCount$ = this.store.select(SolutionsSelectors.getSolutionsCount)
    solutionIds$ = this.store.select(SolutionsSelectors.getSolutionsIds)
    solutionsError$ = this.store.select(SolutionsSelectors.getSolutionsError)
    solutionStatus$ = this.store.select(SolutionsSelectors.getSolutionsStatus)
    init = () => this.store.dispatch(SolutionsActions.startInitSolutions())
    dispatch = (action: Action) => this.store.dispatch(action)
}
