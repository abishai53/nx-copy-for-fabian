import {Component, Input, OnChanges} from '@angular/core'
import {MimeTypes} from '@ezra-clients/common-ui'
import {createSolution, SolutionWidget} from '../../+state/solutions/solutions.models'
import {Router} from '@angular/router'
import {FormMode} from '../../model/solution-form-mode'
import {SlpNavigation} from '../../app-routing.module'

@Component({
    selector: 'slp-solution-widget',
    templateUrl: 'solution-widget.component.html',
    styleUrls: ['solution-widget.component.scss']
})
export class SolutionWidgetComponent implements OnChanges {
    coverImageUrl? = ''
    documentation = {file: '', name: ''}
    _solution = createSolution({label: ''})
    showEditIcon = false
    showDescription = false
    showLoginWarning = false
    target = ''
    pages = SlpNavigation

    @Input() loading: boolean | null = true
    @Input() isLoggedIn = false
    @Input() isAdmin = false

    @Input() set solution(solution: SolutionWidget) {
        this._solution = solution.solutionDto
        this.coverImageUrl = this.generateFileUri(this._solution.image_ext, solution.coverImage)
        this.documentation = {
            name: `${this._solution.sys_name}.${this._solution.documentation_ext}`,
            file: this.generateFileUri(this._solution.documentation_ext, solution.documentation)
        }
    }

    constructor(private readonly router: Router) {}

    ngOnChanges() {
        this.showEditIcon = this.isLoggedIn && this.isAdmin
        this.showLoginWarning = this._solution.authentication_required && !this.isLoggedIn
    }

    openEditForm() {
        this.router.navigate(
            [`/${SlpNavigation.SOLUTION_FORM}`],
            {
                queryParams: {mode: FormMode.EDIT},
                state: {
                    solution: this._solution,
                    coverImageUrl: this.coverImageUrl,
                    documentation: this.documentation.file
                }
            })
    }

    private generateFileUri(ext: string, content: string) {
        const mimeType = MimeTypes.get(ext)
        return `data:${mimeType};base64,${content}`
    }
}
