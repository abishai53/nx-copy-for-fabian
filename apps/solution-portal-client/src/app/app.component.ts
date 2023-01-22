import {Component, OnInit} from '@angular/core'
import {SolutionsFacade} from './+state/solutions/solutions.facade'
import {AuthService} from '@ezra-clients/common-ui'

@Component({
    selector: 'slp-solution-portal-client-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'solution-portal-client'
    name$ = this.authService.name$

    constructor(private readonly solutionsFacade: SolutionsFacade, private readonly authService: AuthService) {}

    ngOnInit() {
        this.solutionsFacade.init()
    }
}