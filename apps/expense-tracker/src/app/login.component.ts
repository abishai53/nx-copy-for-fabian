import {Component} from '@angular/core'
import {AuthService} from '@ezra-clients/common-ui'

@Component({
    standalone: true,
    template: 'You will be redirected to log in...'
})
export class LoginComponent {
    constructor(private readonly authService: AuthService) {
        authService.signIn()
    }
}
