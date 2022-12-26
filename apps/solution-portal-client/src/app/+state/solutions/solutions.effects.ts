import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {catchError, map, switchMap, mergeMap} from 'rxjs/operators'
import {SolutionService} from '../../services/solution-service'

import * as SolutionsActions from './solutions.actions'

@Injectable()
export class SolutionsEffects {
    constructor(private readonly actions$: Actions, private readonly solutionService: SolutionService) {}

    fetchAllSolutions$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SolutionsActions.startInitSolutions),
            switchMap(() =>
                this.solutionService.fetchAllSolutions().pipe(
                    map((solutions) => SolutionsActions.initSolutionsSuccess({solutions})),
                    catchError((error) => of(SolutionsActions.initSolutionFailure({error})))
                )
            )
        )
    )

    createSolution$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SolutionsActions.startAddingSolution),
            mergeMap(({solution}) =>
                this.solutionService.createSolution(solution).pipe(
                    map((solution) => SolutionsActions.addSolutionSuccess({solution})),
                    catchError((error) => of(SolutionsActions.addSolutionsFailure({error})))
                )
            )
        )
    )
}
