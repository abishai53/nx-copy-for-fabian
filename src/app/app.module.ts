import {RouterModule, Routes} from '@angular/router'
import {AboutComponent} from './pages/about/about.component'
import {AppComponent} from './app.component'
import {BlogComponent} from './pages/blog/blog.component'
import {BrowserModule} from '@angular/platform-browser'
import {FooterModule} from './skeleton/footer/footer.module'
import {HomeComponent} from './pages/home/home.component'
import {NgModule} from '@angular/core'
import {Pages} from '../shared/pages'
import {HomeModule} from './pages/home/home.module'
import {PortfolioComponent} from './pages/portfolio/portfolio.component'
import {HeaderModule} from './skeleton/header/header.module'

const routes: Routes = [
    {path: '', redirectTo: `/${Pages.HOME}`, pathMatch: 'full'},
    {path: Pages.HOME, component: HomeComponent},
    {path: Pages.ABOUT, component: AboutComponent},
    {path: Pages.BLOG, component: BlogComponent},
    {path: Pages.PORTFOLIO, component: PortfolioComponent}
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
export class AppModule { }
