import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from '@ezra-clients/components2';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Navigation } from './utility-files/navigation';
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';

const routes: Routes = [
  { path: '', redirectTo: Navigation.HOME, pathMatch: 'full' },
  { path: Navigation.HOME, component: HomeComponent },
  { path: Navigation.ABOUT, component: AboutComponent },
  { path: Navigation.BLOG, component: BlogComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    HomeModule,
    RouterModule.forRoot(routes),
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
