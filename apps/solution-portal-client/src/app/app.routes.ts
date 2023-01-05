import {Routes} from '@angular/router'
import {SlpNavigation} from './model/slp-navigation'
import {LandingPageComponent} from './components/landing-page/landing-page.component'
import {SolutionFormComponent} from './components/add-solution/solution-form.component'

export const appRoutes: Routes = [
    {path: '', redirectTo: SlpNavigation.LANDING_PAGE, pathMatch: 'full'},
    {path: SlpNavigation.LANDING_PAGE, component: LandingPageComponent},
    {path: SlpNavigation.SOLUTION_FORM, component: SolutionFormComponent}
]

