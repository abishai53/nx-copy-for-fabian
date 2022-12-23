import {Routes} from '@angular/router'
import {SlpNavigation} from '../model/slp-navigation'
import {LandingPageComponent} from './landing-page/landing-page.component'
import {AddSolutionComponent} from './add-solution/add-solution.component'

export const appRoutes: Routes = [
    {path: '', redirectTo: SlpNavigation.LANDING_PAGE, pathMatch: 'full'},
    {path: SlpNavigation.LANDING_PAGE, component: LandingPageComponent},
    {path: SlpNavigation.ADD_SOLUTION, component: AddSolutionComponent}
]

