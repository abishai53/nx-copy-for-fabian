import {createFeatureSelector, createSelector} from '@ngrx/store'
import {SOLUTIONS_FEATURE_KEY, SolutionsState, solutionsAdapter} from './solutions.reducer'

export const getSolutionsState = createFeatureSelector<SolutionsState>(SOLUTIONS_FEATURE_KEY)

const {selectAll, selectEntities} = solutionsAdapter.getSelectors()

export const solutionsAreLoading = createSelector(
    getSolutionsState,
    (state: SolutionsState) => state.status === 'loading'
)

export const solutionsHaveError = createSelector(
    getSolutionsState,
    (state: SolutionsState) => state.status === 'loading'
)

export const getSolutionsStatus = createSelector(
    getSolutionsState,
    (state: SolutionsState) => state.status
)

export const getSolutionsErrorMessage = createSelector(
    getSolutionsState,
    (state: SolutionsState) => state.errorMessage
)

export const getAllSolutions = createSelector(
    getSolutionsState,
    (state: SolutionsState) => selectAll(state)
)

export const getSolutionsEntities = createSelector(
    getSolutionsState,
    (state: SolutionsState) => selectEntities(state)
)

