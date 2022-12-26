import {NgModule} from '@angular/core'
import {TestBed} from '@angular/core/testing'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule, Store} from '@ngrx/store'
import {readFirst} from '@nrwl/angular/testing'

import * as SolutionsActions from './solutions.actions'
import {SolutionsEffects} from './solutions.effects'
import {SolutionsFacade} from './solutions.facade'
import {SolutionsEntity} from './solutions.models'
import {
    SOLUTIONS_FEATURE_KEY,
    SolutionsState,
    initialSolutionsState,
    solutionsReducer
} from './solutions.reducer'
import * as SolutionsSelectors from './solutions.selectors'

interface TestSchema {
  solutions: SolutionsState;
}

describe('SolutionsFacade', () => {
    let facade: SolutionsFacade
    let store: Store<TestSchema>
    const createSolutionsEntity = (id: string, name = ''): SolutionsEntity => ({
        id,
        name: name || `name-${id}`
    })

    describe('used in NgModule', () => {
        beforeEach(() => {
      @NgModule({
          imports: [
              StoreModule.forFeature(SOLUTIONS_FEATURE_KEY, solutionsReducer),
              EffectsModule.forFeature([SolutionsEffects])
          ],
          providers: [SolutionsFacade]
      })
            class CustomFeatureModule {}

      @NgModule({
          imports: [
              StoreModule.forRoot({}),
              EffectsModule.forRoot([]),
              CustomFeatureModule
          ]
      })
      class RootModule {}
      TestBed.configureTestingModule({imports: [RootModule]})

      store = TestBed.inject(Store)
      facade = TestBed.inject(SolutionsFacade)
        })

        /**
     * The initially generated facade::loadAll() returns empty array
     */

        it('loadAll() should return empty list with loaded == true', async() => {
            let list = await readFirst(facade.allSolutions$)
            let isLoaded = await readFirst(facade.loading$)

            expect(list.length).toBe(0)
            expect(isLoaded).toBe(false)

            facade.init()

            list = await readFirst(facade.allSolutions$)
            isLoaded = await readFirst(facade.loading$)

            expect(list.length).toBe(0)
            expect(isLoaded).toBe(true)
        })

        /**
     * Use `loadSolutionsSuccess` to manually update list
     */

        it('allSolutions$ should return the loaded list; and loaded flag == true', async() => {
            let list = await readFirst(facade.allSolutions$)
            let isLoaded = await readFirst(facade.loading$)

            expect(list.length).toBe(0)
            expect(isLoaded).toBe(false)

            store.dispatch(SolutionsActions.loadSolutionsSuccess({
                solutions: [
                    createSolutionsEntity('AAA'),
                    createSolutionsEntity('BBB')
                ]
            }))

            list = await readFirst(facade.allSolutions$)
            isLoaded = await readFirst(facade.loading$)

            expect(list.length).toBe(2)
            expect(isLoaded).toBe(true)
        })
    })
})
