import {Routes} from '@angular/router'
import {SlpNavigation} from './utility-files/slp-navigation'
import {LandingPageComponent} from './landing-page/landing-page.component'

export const appRoutes: Routes = [
    {path: '', redirectTo: SlpNavigation.LANDING_PAGE, pathMatch: 'full'},
    {path: SlpNavigation.LANDING_PAGE, component: LandingPageComponent},
]

