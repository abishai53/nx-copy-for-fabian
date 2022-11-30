import {RouterModule, Routes} from '@angular/router'
import {AboutComponent} from './static-portfolio/about/about.component'
import {AppComponent} from './app.component'
import {BlogComponent} from './static-portfolio/blog/blog.component'
import {BrowserModule} from '@angular/platform-browser'
import {FooterModule} from './shared-components/skeleton/footer/footer.module'
import {HomeComponent} from './static-portfolio/home/home.component'
import {NgModule} from '@angular/core'
import {Navigation} from './shared-components/utility-files/navigation'
import {HomeModule} from './static-portfolio/home/home.module'
import {HeaderModule} from './shared-components/skeleton/header/header.module'
import {ProjectsComponent} from './static-portfolio/projects/projects.component'

const routes: Routes = [
    {path: '', redirectTo: Navigation.HOME, pathMatch: 'full'},
    {path: Navigation.HOME, component: HomeComponent},
    {path: Navigation.ABOUT, component: AboutComponent},
    {path: Navigation.BLOG, component: BlogComponent},
    {path: Navigation.PROJECTS, component: ProjectsComponent}
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
