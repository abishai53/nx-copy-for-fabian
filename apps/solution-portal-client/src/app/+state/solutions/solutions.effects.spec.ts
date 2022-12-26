import {TestBed} from '@angular/core/testing'
import {provideMockActions} from '@ngrx/effects/testing'
import {Action} from '@ngrx/store'
import {provideMockStore} from '@ngrx/store/testing'
import {hot} from 'jasmine-marbles'
import {Observable} from 'rxjs'

import * as SolutionsActions from './solutions.actions'
import {SolutionsEffects} from './solutions.effects'

describe('SolutionsEffects', () => {
    let actions: Observable<Action>
    let effects: SolutionsEffects

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                SolutionsEffects,
                provideMockActions(() => actions),
                provideMockStore()
            ]
        })

        effects = TestBed.inject(SolutionsEffects)
    })

    describe('init$', () => {
        it('should work', () => {
            actions = hot('-a-|', {a: SolutionsActions.initSolutions()})

            const expected = hot('-a-|', {
                a: SolutionsActions.loadSolutionsSuccess({solutions: []})
            })

            expect(effects.init$).toBeObservable(expected)
        })
    })
})
