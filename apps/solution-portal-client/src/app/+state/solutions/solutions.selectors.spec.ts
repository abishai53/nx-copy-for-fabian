import {SolutionsEntity} from './solutions.models'
import {
    solutionsAdapter,
    SolutionsPartialState,
    initialSolutionsState
} from './solutions.reducer'
import * as SolutionsSelectors from './solutions.selectors'

describe('Solutions Selectors', () => {
    const ERROR_MSG = 'No Error Available'
    const getSolutionsId = (it: SolutionsEntity) => it.id
    const createSolutionsEntity = (id: string, name = '') => ({
        id,
        name: name || `name-${id}`
    } as SolutionsEntity)

    let state: SolutionsPartialState

    beforeEach(() => {
        state = {
            solutions: solutionsAdapter.setAll(
                [
                    createSolutionsEntity('PRODUCT-AAA'),
                    createSolutionsEntity('PRODUCT-BBB'),
                    createSolutionsEntity('PRODUCT-CCC')
                ],
                {
                    ...initialSolutionsState,
                    selectedId: 'PRODUCT-BBB',
                    error: ERROR_MSG,
                    loaded: true
                }
            )
        }
    })

    describe('Solutions Selectors', () => {
        it('getAllSolutions() should return the list of Solutions', () => {
            const results = SolutionsSelectors.getAllSolutions(state)
            const selId = getSolutionsId(results[1])

            expect(results.length).toBe(3)
            expect(selId).toBe('PRODUCT-BBB')
        })

        it('getSelected() should return the selected Entity', () => {
            const result = SolutionsSelectors.getSelected(state) as SolutionsEntity
            const selId = getSolutionsId(result)

            expect(selId).toBe('PRODUCT-BBB')
        })

        it('getSolutionsLoaded() should return the current "loaded" status', () => {
            const result = SolutionsSelectors.solutionsAreLoading(state)

            expect(result).toBe(true)
        })

        it('getSolutionsError() should return the current "error" state', () => {
            const result = SolutionsSelectors.solutionsHaveError(state)

            expect(result).toBe(ERROR_MSG)
        })
    })
})
