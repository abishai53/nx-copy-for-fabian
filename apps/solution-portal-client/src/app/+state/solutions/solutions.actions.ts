import {createAction, props} from '@ngrx/store'
import {SolutionsEntity} from './solutions.models'

export const startAddingSolution = createAction(
    '[Solutions Page] Start Adding Solution',
    props<{ solution: SolutionsEntity }>()
)

export const addSolutionSuccess = createAction(
    '[Solutions Page] Add Solution Success',
    props<{ solution: SolutionsEntity }>()
)

export const startUpdatingSolution = createAction(
    '[Solutions Page] Start Updating Solution',
    props<{ solution: SolutionsEntity }>()
)
export const updateSolutionSuccess = createAction(
    '[Solutions Page] Update Solution Success',
    props<{ solution: SolutionsEntity }>()
)

export const removeSolutionSuccess = createAction(
    '[Solutions Page] Remove Solution Success',
    props<{ id: string }>()
)

export const actionFailure = createAction(
    '[Solutions] General Action Failure',
    props<{ error: any }>()
)

export const loadSolutionsSuccess = createAction(
    '[Solutions/API] Load Solutions Success',
    props<{ solutions: SolutionsEntity[] }>()
)

export const initSolutions = createAction('[Solutions Page] Init')


export const startDeletingSolution = createAction('[Solutions Page] Start Deleting Solution')