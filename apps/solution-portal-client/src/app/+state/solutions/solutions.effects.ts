import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {catchError, map, switchMap, mergeMap} from 'rxjs/operators'
import {SolutionService} from '../../services/solution.service'

import * as SolutionsActions from './solutions.actions'

@Injectable()
export class SolutionsEffects {
    constructor(private readonly actions$: Actions, private readonly solutionService: SolutionService) {}

    fetchAllSolutions$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SolutionsActions.startInitSolutions),
            switchMap(() =>
                this.solutionService.fetchAllSolutions().pipe(
                    map(solutions => SolutionsActions.initSolutionsSuccess({solutions})),
                    catchError(error => of(SolutionsActions.initSolutionFailure({error})))
                )
            )
        )
    )

    createSolution$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SolutionsActions.startAddingSolution),
            switchMap(({solution}) =>
                this.solutionService.createSolution(solution).pipe(
                    map(solution => SolutionsActions.addSolutionSuccess({solution})),
                    catchError(error => of(SolutionsActions.addSolutionsFailure({error})))
                )
            )
        )
    )

    updateSolution$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SolutionsActions.startUpdatingSolution),
            switchMap(({solution}) =>
                this.solutionService.updateSolution(solution).pipe(
                    map(solution => SolutionsActions.updateSolutionSuccess({solution})),
                    catchError(error => of(SolutionsActions.updateSolutionFailure({error})))
                )
            )
        )
    )

    deleteSolution$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SolutionsActions.startDeletingSolution),
            switchMap(({id, index}) =>
                this.solutionService.deleteSolution(id, index).pipe(
                    map(index => SolutionsActions.deleteSolutionSuccess({index})),
                    catchError(error => of(SolutionsActions.deleteSolutionFailure({error})))
                )
            )
        )
    )
}
