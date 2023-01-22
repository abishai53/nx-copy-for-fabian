import {Component} from '@angular/core'
import {AuthService, ButtonFill, ElementSize, TextColor} from '@ezra-clients/common-ui'
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
    loggedIn$ = this.authService.loggedIn$
    name$ = this.authService.name$
    settingsUrl = `https://${environment.OKTA_DOMAIN}/enduser/settings`

    constructor(private readonly authService: AuthService) {}

    signIn() { this.authService.signIn() }
    signOut() { this.authService.signOut() }
}
