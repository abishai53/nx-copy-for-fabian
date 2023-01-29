import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './components/header/header.module';
import { LandingPageModule } from './components/landing-page/landing-page.module';
import { SolutionFormModule } from './components/solution-form/solution-form.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SlpHttpInterceptor } from './services/slp-http-interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSolutions from './+state/solutions/solutions.reducer';
import { SolutionsEffects } from './+state/solutions/solutions.effects';
import { SolutionsFacade } from './+state/solutions/solutions.facade';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { OktaAuth } from '@okta/okta-auth-js';
import { environment } from '../environments/environment';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { SharedServicesModule } from '@ezra-clients/common-ui';

const oktaAuth = new OktaAuth({
  issuer: `https://${environment.OKTA_DOMAIN}/oauth2/default`,
  clientId: `${environment.OKTA_CLIENT_ID}`,
  redirectUri: `${window.location.origin}/login/callback`,
});

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    LandingPageModule,
    SolutionFormModule,
    HttpClientModule,
    OktaAuthModule,
    SharedServicesModule,
    StoreModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    StoreModule.forFeature(
      fromSolutions.SOLUTIONS_FEATURE_KEY,
      fromSolutions.solutionsReducer
    ),
    EffectsModule.forRoot([SolutionsEffects]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SlpHttpInterceptor, multi: true },
    { provide: OKTA_CONFIG, useValue: { oktaAuth } },
    SolutionsFacade,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
