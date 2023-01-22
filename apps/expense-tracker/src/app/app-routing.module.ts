import {provideRouter, Routes, RouterModule, Router} from '@angular/router'
import {inject, NgModule} from '@angular/core'
import {OktaCallbackComponent} from '@okta/okta-angular'
import {NxWelcomeComponent} from './nx-welcome.component'
import {AuthService} from '@ezra-clients/common-ui'
import {firstValueFrom} from 'rxjs'
import {LoginComponent} from './login.component'

async function authGuard() {
    const authService = inject(AuthService)
    const router = inject(Router)
    const isLoggedIn = await firstValueFrom(authService.loggedIn$).then(next => next)
    if (isLoggedIn) return isLoggedIn
    return router.parseUrl('/login')
}

export const appRoutes: Routes = [
    {path: '', component: NxWelcomeComponent, pathMatch: 'full', canActivate: [authGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'login/callback', component: OktaCallbackComponent}
]

@NgModule({
    exports: [RouterModule],
    providers: [provideRouter(appRoutes)]
})
export class AppRoutingModule {}