import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map, Observable} from 'rxjs'
import {createSolution, SolutionWidget} from '../+state/solutions/solutions.models'
import {FormGroup} from '@angular/forms'

@Injectable({providedIn: 'root'})
export class SolutionService {
    baseUrl = '/solution'

    constructor(private httpClient: HttpClient) {}

    createSolution = (solution: FormData): Observable<SolutionWidget> =>
        this.httpClient.post<SolutionWidget>(this.baseUrl, solution)

    updateSolution = (solution: FormData): Observable<SolutionWidget> =>
        this.httpClient.put<SolutionWidget>(this.baseUrl, solution)

    deleteSolution = (solutionId: string, index: number): Observable<number> =>
        this.httpClient.delete(`${this.baseUrl}/${solutionId}`).pipe(map(() => index))


    fetchAllSolutions = (): Observable<SolutionWidget[]> =>
        this.httpClient.get<SolutionWidget[]>(this.baseUrl).pipe(
            map(widgets => widgets.sort((a, b) => a.solutionDto.index - b.solutionDto.index))
        )

    createSolutionFormData(
        formGroup: FormGroup,
        imageExt?: string,
        docExt?: string,
        coverImage?: File,
        documentation?: File
    ):FormData {
        const newSolution = createSolution({
            sys_id: formGroup.value.sys_id,
            authentication_required: formGroup.value.auth,
            description: formGroup.value.description,
            documentation_ext: docExt,
            image_ext: imageExt,
            index: formGroup.getRawValue().index,
            label: formGroup.value.label,
            sys_name: formGroup.getRawValue().sys_name,
            url: formGroup.value.url
        })

        const formData = new FormData()
        formData.append('solutionDto', JSON.stringify(newSolution))
        if (coverImage) formData.append('coverImage', coverImage)
        if (documentation) formData.append('documentation', documentation)
        return formData
    }
}