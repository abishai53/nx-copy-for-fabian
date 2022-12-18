import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {RouterModule} from '@angular/router'
import {appRoutes} from './app.routes'
import {FooterModule} from '@ezra-clients/components'
import {Imagekit} from '@ezra-clients/common-ui'
import {HeaderModule} from './header/header.module'
import {LandingPageModule} from './landing-page/landing-page.module'
import {ImagekitioAngularModule} from 'imagekitio-angular'
import {AddSolutionModule} from './add-solution/add-solution.module'

@NgModule({
    declarations: [AppComponent],
    imports: [
        ImagekitioAngularModule.forRoot({
            publicKey: Imagekit.PUBLIC_KEY,
            urlEndpoint: `${Imagekit.URL_ENDPOINT}/solution-portal`,
            authenticationEndpoint: Imagekit.AUTHENTICATION_ENDPOINT
        }),
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FooterModule,
        HeaderModule,
        LandingPageModule,
        AddSolutionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
