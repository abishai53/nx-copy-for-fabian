import {Component, OnInit} from '@angular/core'
import {SolutionsFacade} from './+state/solutions/solutions.facade'

@Component({
    selector: 'slp-solution-portal-client-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'solution-portal-client'
    constructor(private readonly solutionsFacade: SolutionsFacade) {}

    ngOnInit() {
        this.solutionsFacade.init()
    }
}