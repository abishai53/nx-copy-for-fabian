import {NgModule} from '@angular/core'
import {LandingPageComponent} from './landing-page.component'
import {InputTextModule} from 'primeng/inputtext'
import {ButtonModule} from '../button/button.module'

@NgModule({
    declarations: [LandingPageComponent],
    exports: [LandingPageComponent],
    imports: [
        InputTextModule,
        ButtonModule
    ]
})
export class LandingPageModule {}