import {Component} from '@angular/core'
import {Navigation} from '../utility-files/navigation'
import {NavigablePage} from '../utility-files/navigable-page'

@Component({
    selector: 'ptf-portfolio',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.scss']
})
export class ProjectsComponent implements NavigablePage {
    pageName = Navigation.PROJECTS
}
