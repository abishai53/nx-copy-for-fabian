import {RouterLink, RouterLinkWithHref} from '@angular/router'
import {HomeComponent} from './home.component'
import {NgModule} from '@angular/core'

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [
        RouterLink,
        RouterLinkWithHref
    ]
})
export class HomeModule {}