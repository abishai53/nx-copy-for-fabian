import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Solution} from '../model/solution'
import {Observable} from 'rxjs'

@Injectable({providedIn: 'root'})
export class SolutionService {
    baseUrl = '/solution'
    constructor(private httpClient: HttpClient) {}

    saveSolution(solution: Solution): Observable<Solution> {
        return this.httpClient.post<Solution>(this.baseUrl, solution)
    }
}