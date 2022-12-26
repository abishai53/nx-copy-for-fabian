import {Action} from '@ngrx/store'

import * as SolutionsActions from './solutions.actions'
import {SolutionsEntity} from './solutions.models'
import {
    SolutionsState,
    initialSolutionsState,
    solutionsReducer
} from './solutions.reducer'

describe('Solutions Reducer', () => {
    const createSolutionsEntity = (id: string, name = ''): SolutionsEntity => ({
        id,
        name: name || `name-${id}`
    })

    describe('valid Solutions actions', () => {
        it('loadSolutionsSuccess should return the list of known Solutions', () => {
            const solutions = [
                createSolutionsEntity('PRODUCT-AAA'),
                createSolutionsEntity('PRODUCT-zzz')
            ]
            const action = SolutionsActions.initSolutionsSuccess({solutions})

            const result: SolutionsState = solutionsReducer(
                initialSolutionsState,
                action
            )

            expect(result.loading).toBe(true)
            expect(result.ids.length).toBe(2)
        })
    })

    describe('unknown action', () => {
        it('should return the previous state', () => {
            const action = {} as Action

            const result = solutionsReducer(initialSolutionsState, action)

            expect(result).toBe(initialSolutionsState)
        })
    })
})
