import {Component} from '@angular/core'
import {OktaService} from '@ezra-clients/common-ui'

@Component({
    standalone: true,
    template: 'You will be redirected to log in...'
})
export class LoginComponent {
    constructor(private readonly oktaService: OktaService) {
        oktaService.signIn()
    }
}
