import {RouterModule, Routes} from '@angular/router'
import {AboutComponent} from './about/about.component'
import {AppComponent} from './app.component'
import {BlogComponent} from './blog/blog.component'
import {BrowserModule} from '@angular/platform-browser'
import {HomeComponent} from './home/home.component'
import {NgModule} from '@angular/core'
import {Navigation} from './ptf-shared/utility-files/navigation'
import {HomeModule} from './home/home.module'
import {HeaderModule} from './ptf-shared/header/header.module'
import {FooterModule} from '../../../../libs/ui/portfolio-client/src/footer/footer.module'

const routes: Routes = [
    {path: '', redirectTo: Navigation.HOME, pathMatch: 'full'},
    {path: Navigation.HOME, component: HomeComponent},
    {path: Navigation.ABOUT, component: AboutComponent},
    {path: Navigation.BLOG, component: BlogComponent}
]

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FooterModule,
        HeaderModule,
        HomeModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule {}
