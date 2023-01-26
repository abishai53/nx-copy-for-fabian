import {Component} from '@angular/core'
import {OktaService, ButtonFill, ElementSize, TextColor} from '@ezra-clients/common-ui'
import {environment} from '../../../environments/environment'

@Component({
    selector: 'slp-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
    buttonSize = ElementSize
    buttonFill = ButtonFill.LINEAR
    textColor = TextColor.WHITE
    loggedIn$ = this.oktaService.loggedIn$
    name$ = this.oktaService.name$
    settingsUrl = `https://${environment.OKTA_DOMAIN}/enduser/settings`

    constructor(private readonly oktaService: OktaService) {}

    signIn() { this.oktaService.signIn() }
    signOut() { this.oktaService.signOut() }
}
