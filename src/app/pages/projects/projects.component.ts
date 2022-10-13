import {Component} from '@angular/core'
import {Pages} from '../../../shared/pages'
import {NavigablePage} from '../navigable-page'

@Component({
    selector: 'ptf-portfolio',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.scss']
})
export class ProjectsComponent implements NavigablePage {
    pageName = Pages.PROJECTS
}
