import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {NxWelcomeComponent} from './nx-welcome.component'
import {AppRoutingModule} from './app-routing.module'
import {SharedServicesModule} from '@ezra-clients/common-ui'
import OktaAuth from '@okta/okta-auth-js'
import {environment} from '../environments/environment'
import {OktaAuthModule, OKTA_CONFIG} from '@okta/okta-angular'

const oktaAuth = new OktaAuth({
    issuer: `https://${environment.OKTA_DOMAIN}/oauth2/default`,
    clientId: `${environment.OKTA_CLIENT_ID}`,
    redirectUri: `${window.location.origin}/login/callback`
})

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedServicesModule,
        OktaAuthModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {provide: OKTA_CONFIG, useValue: {oktaAuth}}
    ]
})
export class AppModule {}
