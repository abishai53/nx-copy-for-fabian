import {RouterLink} from '@angular/router'
import {HomeComponent} from './home.component'
import {NgModule} from '@angular/core'

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [
        RouterLink
    ]
})
export class HomeModule {}