import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {RouterModule} from '@angular/router'
import {appRoutes} from './app.routes'
import {FooterModule} from '@ezra-clients/components'
import {HeaderModule} from './components/header/header.module'
import {LandingPageModule} from './components/landing-page/landing-page.module'
import {SolutionFormModule} from './components/add-solution/solution-form.module'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {SlpHttpInterceptor} from './services/slp-http-interceptor'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import * as fromSolutions from './+state/solutions/solutions.reducer'
import {SolutionsEffects} from './+state/solutions/solutions.effects'
import {SolutionsFacade} from './+state/solutions/solutions.facade'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {BlockUIModule} from 'ng-block-ui'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FooterModule,
        HeaderModule,
        LandingPageModule,
        SolutionFormModule,
        HttpClientModule,
        StoreModule.forRoot(),
        StoreDevtoolsModule.instrument({maxAge: 25}),
        StoreModule.forFeature(fromSolutions.SOLUTIONS_FEATURE_KEY, fromSolutions.solutionsReducer),
        EffectsModule.forRoot([SolutionsEffects]),
        BlockUIModule.forRoot()
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: SlpHttpInterceptor, multi: true},
        SolutionsFacade
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
