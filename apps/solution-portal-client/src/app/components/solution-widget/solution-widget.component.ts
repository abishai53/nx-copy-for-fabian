import {Component, Input} from '@angular/core'
import {DocMimeType, ImageMimeTypes} from '@ezra-clients/common-ui'
import {createSolution, SolutionWidget} from '../../+state/solutions/solutions.models'

@Component({
    selector: 'slp-solution-widget',
    templateUrl: 'solution-widget.component.html',
    styleUrls: ['solution-widget.component.scss']
})
export class SolutionWidgetComponent {
    coverImageUrl = ''
    documentation = {file: '', name: ''}
    _solution = createSolution({label: ''})
    _isAdmin = false
    _isLoggedIn = false
    showEditIcon = false

    @Input() loading: boolean | null = true

    @Input() set solution(solution: SolutionWidget) {
        this._solution = solution.solutionDto
        const imageMimeType = ImageMimeTypes.get(this._solution.image_ext)
        const docMimeType = DocMimeType.get(this._solution.documentation_ext)
        this.coverImageUrl = this.generateFileUri(imageMimeType, solution.coverImage)
        this.documentation = {
            name: `${this._solution.sys_name}.${this._solution.documentation_ext}`,
            file: this.generateFileUri(docMimeType, solution.documentation)
        }
    }

    @Input() set isLoggedIn(isLoggedIn: boolean) {
        this._isLoggedIn = isLoggedIn
        this.updateEditIcon()
    }

    @Input() set isAdmin(isAdmin: boolean) {
        this._isAdmin = isAdmin
        this.updateEditIcon()
    }

    private updateEditIcon = () => this.showEditIcon = this._isLoggedIn && this._isAdmin

    private generateFileUri(mime?: string, content?: string) {
        return `data:${mime};base64,${content}`
    }
}
