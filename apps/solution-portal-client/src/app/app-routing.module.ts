import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {LandingPageComponent} from './components/landing-page/landing-page.component'
import {SolutionFormComponent} from './components/solution-form/solution-form.component'
import {OktaCallbackComponent} from '@okta/okta-angular'

export enum SlpNavigation {
    LANDING_PAGE = 'landing-page',
    SOLUTION_FORM = 'solution-form',
    OKTA_REDIRECT = 'login/callback'
}

const appRoutes: Routes = [
    {path: '', redirectTo: SlpNavigation.LANDING_PAGE, pathMatch: 'full'},
    {path: SlpNavigation.LANDING_PAGE, component: LandingPageComponent},
    {path: SlpNavigation.SOLUTION_FORM, component: SolutionFormComponent},
    {path: SlpNavigation.OKTA_REDIRECT, component: OktaCallbackComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}