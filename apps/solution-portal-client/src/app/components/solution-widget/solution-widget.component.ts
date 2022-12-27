import {Component, Input} from '@angular/core'
import {SolutionsEntity} from '../../+state/solutions/solutions.models'

@Component({
    selector: 'slp-solution-widget',
    templateUrl: 'solution-widget.component.html',
    styleUrls: ['solution-widget.component.scss']
})
export class SolutionWidgetComponent {
    coverImageUrl = 'cover-images/'
    solution?: SolutionsEntity
    isAdmin = false
    imageKitTransformation = [{
        height: 280,
        width: 520
    }]

    @Input() loading: boolean | null = true

    requiresLogin = true
    showEditIcon = false

    @Input('solution')
    set setSolution(solution: SolutionsEntity) {
        this.coverImageUrl += solution.sys_name + '.' + solution.image_ext
        this.solution = solution
    }
    @Input('isLoggedIn')
    set setLoggedIn(isLoggedIn: boolean) {
        this.requiresLogin = !isLoggedIn
        this.updateEditIcon()
    }

    @Input('isAdmin')
    set setAdmin(isAdmin: boolean) {
        this.isAdmin = isAdmin
        this.updateEditIcon()
    }

    private updateEditIcon = () => this.showEditIcon = !this.requiresLogin && this.isAdmin
}
