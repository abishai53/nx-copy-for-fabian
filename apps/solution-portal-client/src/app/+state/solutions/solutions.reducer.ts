import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity'
import {createReducer, on} from '@ngrx/store'

import * as SolutionsActions from './solutions.actions'
import {SolutionsEntity} from './solutions.models'

export const SOLUTIONS_FEATURE_KEY = 'solutions'

export interface SolutionsState extends EntityState<SolutionsEntity> {
  solutions: SolutionsEntity[]
  errorMessage: any | null
  status: 'pending' | 'loading' | 'error' | 'success'
}

export interface SolutionsPartialState {
  readonly [SOLUTIONS_FEATURE_KEY]: SolutionsState;
}

export const solutionsAdapter: EntityAdapter<SolutionsEntity> =
  createEntityAdapter<SolutionsEntity>({selectId: solution => solution.index})

export const initialSolutionsState: SolutionsState =
  solutionsAdapter.getInitialState({
      solutions: [],
      status: 'pending',
      errorMessage: null
  })

export const solutionsReducer = createReducer(

    initialSolutionsState,

    on(
        SolutionsActions.actionFailure,
        (state, {error}) => ({...state, status: 'error', errorMessage: error})
    ),

    on(
        SolutionsActions.removeSolutionSuccess,
        (state, {id}) => solutionsAdapter.removeOne(id, {...state, status: 'success'})
    ),

    on(
        SolutionsActions.loadSolutionsSuccess,
        (state, {solutions}) => solutionsAdapter.setAll(solutions, {...state, status: 'success'})
    ),

    on(
        SolutionsActions.initSolutions,
        SolutionsActions.startAddingSolution,
        SolutionsActions.startUpdatingSolution,
        SolutionsActions.startDeletingSolution,
        (state) => ({...state, status: 'loading'})
    ),

    on(
        SolutionsActions.updateSolutionSuccess,
        SolutionsActions.addSolutionSuccess,
        (state, {solution}) => solutionsAdapter.upsertOne(solution, {...state, status: 'success'})
    )
)
