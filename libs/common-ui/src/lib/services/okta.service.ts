import {Inject, Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {OktaAuthStateService, OKTA_AUTH} from '@okta/okta-angular'
import OktaAuth, {AuthState} from '@okta/okta-auth-js'
import {filter, map} from 'rxjs/operators'

@Injectable()
export class OktaService {
    loggedIn$ = this.oktaStateService.authState$.pipe(
        filter((s: AuthState) => Boolean(s)),
        map((s: AuthState) => s.isAuthenticated ?? false)
    )
    name$ = this.oktaStateService.authState$.pipe(
        filter((s: AuthState) => Boolean(s)),
        map((s: AuthState) => s.idToken?.claims.name)
    )
    idAdmin$ = this.oktaStateService.authState$.pipe(
        filter((s: AuthState) => Boolean(s)),
        map((s: AuthState) => s.idToken?.claims.name === 'Ezra Orina')
    )

    constructor(
        private readonly oktaStateService: OktaAuthStateService,
        private readonly router: Router,
        @Inject(OKTA_AUTH) private readonly oktaAuth: OktaAuth) {}

    async signIn() : Promise<void> {
        await this.oktaAuth.signInWithRedirect().then(_ => this.router.navigate(['']))
    }

    async signOut(): Promise<void> { await this.oktaAuth.signOut() }
}