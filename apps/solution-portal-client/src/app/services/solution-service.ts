import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {SolutionsEntity} from '../+state/solutions/solutions.models'

@Injectable({providedIn: 'root'})
export class SolutionService {
    baseUrl = '/solution'

    constructor(private httpClient: HttpClient) {}

    createSolution = (solution: SolutionsEntity): Observable<SolutionsEntity> =>
        this.httpClient.post<SolutionsEntity>(this.baseUrl, solution)

    updateSolution = (solution: SolutionsEntity): Observable<SolutionsEntity> =>
        this.httpClient.put<SolutionsEntity>(this.baseUrl, solution)

    deleteSolution = (solution: SolutionsEntity): Observable<SolutionsEntity> =>
        this.httpClient.delete<SolutionsEntity>(`${this.baseUrl}/${solution.sys_id}`)

    fetchAllSolutions = (): Observable<SolutionsEntity[]> =>
        this.httpClient.get<SolutionsEntity[]>(this.baseUrl)
}