import {Component, Input, OnChanges, SimpleChanges} from '@angular/core'
import {MimeTypes} from '@ezra-clients/common-ui'
import {createSolution, SolutionWidget} from '../../+state/solutions/solutions.models'
import {BlockUI, BlockUIService, NgBlockUI} from 'ng-block-ui'

@Component({
    selector: 'slp-solution-widget',
    templateUrl: 'solution-widget.component.html',
    styleUrls: ['solution-widget.component.scss']
})
export class SolutionWidgetComponent implements OnChanges {
    coverImageUrl = ''
    documentation = {file: '', name: ''}
    _solution = createSolution({label: ''})
    showEditIcon = false
    showDescription = false
    blockWidget = true
    target = ''

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

    constructor(private readonly blockUISerive: BlockUIService) {}

    ngOnChanges() {
        this.showEditIcon = this.isLoggedIn && this.isAdmin
        this.updateWidgetBlock()
    }

    private updateWidgetBlock() {
        this.target = `solution-${this._solution.index}`
        if (this._solution.authentication_required && !this.isLoggedIn && !this.loading) {
            this.blockWidget = true
            this.blockUISerive.start(this.target)
        } else {
            this.blockWidget = false
            this.blockUISerive.stop(this.target)
        }
    }

    private generateFileUri(ext: string, content: string) {
        const mimeType = MimeTypes.get(ext)
        return `data:${mimeType};base64,${content}`
    }
}
