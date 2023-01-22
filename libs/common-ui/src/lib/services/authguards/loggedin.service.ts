import {Injectable} from '@angular/core'
import {OktaService} from '../okta.service'
import {CanActivate, Router} from '@angular/router'
import {firstValueFrom} from 'rxjs'

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private readonly oktaService: OktaService, private readonly router: Router) {}

    async canActivate() {
        return await firstValueFrom(this.oktaService.loggedIn$).then(next => next) ? true :
            this.router.navigate(['/login'])
    }
}