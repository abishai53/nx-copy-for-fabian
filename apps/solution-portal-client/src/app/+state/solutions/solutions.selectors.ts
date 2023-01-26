import {createFeatureSelector, createSelector} from '@ngrx/store'
import {SOLUTIONS_FEATURE_KEY, SolutionsState, solutionsAdapter} from './solutions.reducer'

export const getSolutionsState = createFeatureSelector<SolutionsState>(SOLUTIONS_FEATURE_KEY)

const {selectAll, selectTotal, selectIds} = solutionsAdapter.getSelectors()

export const solutionsAreLoading = createSelector(
    getSolutionsState,
    (state: SolutionsState) => state.status === 'loading'
)

export const getSolutionsStatus = createSelector(
    getSolutionsState,
    (state: SolutionsState) => state.status
)

export const getSolutionsError = createSelector(
    getSolutionsState,
    (state: SolutionsState) => state.error
)

export const getAllSolutions = createSelector(
    getSolutionsState,
    (state: SolutionsState) => selectAll(state)
)

export const getSolutionsCount = createSelector(
    getSolutionsState,
    (state: SolutionsState) => selectTotal(state)
)

export const getSolutionsIds = createSelector(
    getSolutionsState,
    (state: SolutionsState) => selectIds(state) as Array<number>
)