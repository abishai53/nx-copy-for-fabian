import {createAction, props} from '@ngrx/store'
import {SolutionsEntity} from './solutions.models'

export const startAddingSolution = createAction(
    '[Add Solution Page] Start Adding Solution',
    props<{ solution: SolutionsEntity }>()
)

export const addSolutionSuccess = createAction(
    '[Add Solution Page] Add Solution Success',
    props<{ solution: SolutionsEntity }>()
)

export const addSolutionsFailure = createAction(
    '[Add Solution Page] Add Solution Failure',
    props<{ error: any }>()
)

export const startUpdatingSolution = createAction(
    '[Edit Solution Page] Start Updating Solution',
    props<{ solution: SolutionsEntity }>()
)
export const updateSolutionSuccess = createAction(
    '[Edit Solution Page] Update Solution Success',
    props<{ solution: SolutionsEntity }>()
)

export const updateSolutionFailure = createAction(
    '[Edit Solution Page] Update Solution Failure',
    props<{ error: any }>()
)

export const startDeletingSolution = createAction(
    '[Edit Solution Page] Start Deleting Solution',
    props<{ id: string }>()
)

export const deleteSolutionSuccess = createAction(
    '[Edit Solutions Page] Delete Solution Success',
    props<{ id: string }>()
)

export const deleteSolutionFailure = createAction(
    '[Edit Solutions Page] Delete Solution Failure',
    props<{ error: any }>()
)

export const startInitSolutions = createAction(
    '[Solution Portal Landing Page] Start Initializing Solutions'
)

export const initSolutionsSuccess = createAction(
    '[Solutions/API] Fetch All Solutions Success',
    props<{ solutions: SolutionsEntity[] }>()
)

export const initSolutionFailure = createAction(
    '[Solutions/API] Fetch All Solutions Failure',
    props<{ error: any }>()
)