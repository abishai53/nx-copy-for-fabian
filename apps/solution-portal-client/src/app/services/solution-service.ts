import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {createSolution, SolutionWidget} from '../+state/solutions/solutions.models'
import {FormGroup} from '@angular/forms'
import {getExt} from '../components/add-solution/add-solution-helper'

@Injectable({providedIn: 'root'})
export class SolutionService {
    baseUrl = '/solution'

    constructor(private httpClient: HttpClient) {}

    createSolution = (solution: FormData): Observable<SolutionWidget> =>
        this.httpClient.post<SolutionWidget>(this.baseUrl, solution)

    updateSolution = (solution: SolutionWidget): Observable<SolutionWidget> =>
        this.httpClient.put<SolutionWidget>(this.baseUrl, solution)

    deleteSolution = (solution: SolutionWidget): Observable<SolutionWidget> =>
        this.httpClient.delete<SolutionWidget>(`${this.baseUrl}/${solution.solutionDto.sys_id}`)

    fetchAllSolutions = (): Observable<SolutionWidget[]> =>
        this.httpClient.get<SolutionWidget[]>(this.baseUrl)

    createSolutionFormData(formGroup: FormGroup, coverImage: File, documentation: File): FormData {
        const imageExt = getExt(coverImage.name)
        const docExt = getExt(documentation.name)

        const newSolution = createSolution({
            authentication_required: formGroup.value.auth,
            description: formGroup.value.description,
            documentation_ext: docExt,
            image_ext: imageExt,
            index: formGroup.value.index,
            label: formGroup.value.label,
            sys_name: formGroup.getRawValue().sys_name,
            url: formGroup.value.url
        })

        const formData = new FormData()
        formData.append('solutionDto', JSON.stringify(newSolution))
        formData.append('coverImage', coverImage)
        formData.append('documentation', documentation)
        return formData
    }
}