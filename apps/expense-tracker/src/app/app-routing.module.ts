import {provideRouter, Routes, RouterModule} from '@angular/router'
import {NgModule} from '@angular/core'
import {OktaCallbackComponent} from '@okta/okta-angular'
import {NxWelcomeComponent} from './nx-welcome.component'
import {LoginComponent} from './login.component'
import {LoggedInGuard} from '@ezra-clients/common-ui'

export const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'login/callback', component: OktaCallbackComponent},
    {path: '**', component: NxWelcomeComponent, canActivate: [LoggedInGuard]}
]

@NgModule({
    exports: [RouterModule],
    providers: [provideRouter(appRoutes)]
})
export class AppRoutingModule {}