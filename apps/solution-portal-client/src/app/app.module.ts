import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {RouterModule} from '@angular/router'
import {appRoutes} from './app.routes'
import {FooterModule} from '@ezra-clients/components'
import {HeaderModule} from './header/header.module'
import {LandingPageModule} from './landing-page/landing-page.module'
import {AddSolutionModule} from './add-solution/add-solution.module'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {SlpHttpInterceptor} from '../service/slp-http-interceptor'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FooterModule,
        HeaderModule,
        LandingPageModule,
        AddSolutionModule,
        HttpClientModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: SlpHttpInterceptor, multi: true },],
    bootstrap: [AppComponent]
})
export class AppModule {}
