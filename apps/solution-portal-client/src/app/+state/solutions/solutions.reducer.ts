import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity'
import {createReducer, on} from '@ngrx/store'

import * as SolutionsActions from './solutions.actions'
import {SolutionsEntity} from './solutions.models'

export const SOLUTIONS_FEATURE_KEY = 'solutions'

export interface SolutionsState extends EntityState<SolutionsEntity> {
  error: any | null
  status: 'pending' | 'loading' | 'error' | 'success'
}

export interface SolutionsPartialState {
  readonly [SOLUTIONS_FEATURE_KEY]: SolutionsState;
}

export const solutionsAdapter: EntityAdapter<SolutionsEntity> =
  createEntityAdapter<SolutionsEntity>({selectId: solution => solution.sys_id})

export const initialSolutionsState: SolutionsState =
  solutionsAdapter.getInitialState({
      status: 'pending',
      error: null
  })

export const solutionsReducer = createReducer(

    initialSolutionsState,

    on(
        SolutionsActions.deleteSolutionSuccess,
        (state, {id}) => solutionsAdapter.removeOne(id, {...state, status: 'success'})
    ),

    on(
        SolutionsActions.initSolutionsSuccess,
        (state, {solutions}) => solutionsAdapter.setAll(solutions, {...state, status: 'success'})
    ),

    on(
        SolutionsActions.updateSolutionSuccess,
        SolutionsActions.addSolutionSuccess,
        (state, {solution}) => solutionsAdapter.upsertOne(solution, {...state, status: 'success'})
    ),

    on(
        SolutionsActions.startInitSolutions,
        SolutionsActions.startAddingSolution,
        SolutionsActions.startUpdatingSolution,
        SolutionsActions.startDeletingSolution,
        (state) => ({...state, status: 'loading'})
    ),

    on(
        SolutionsActions.addSolutionsFailure,
        SolutionsActions.updateSolutionFailure,
        SolutionsActions.deleteSolutionFailure,
        SolutionsActions.initSolutionFailure,
        (state, {error}) => ({...state, status: 'error', error: error})
    )
)