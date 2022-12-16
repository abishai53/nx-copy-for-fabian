import {NgModule} from '@angular/core'
import {LandingPageComponent} from './landing-page.component'
import {InputTextModule} from 'primeng/inputtext'
import {ButtonModule} from '../button/button.module'
import {ImagekitioAngularModule} from 'imagekitio-angular'

@NgModule({
    declarations: [LandingPageComponent],
    exports: [LandingPageComponent],
    imports: [
        InputTextModule,
        ButtonModule,
        ImagekitioAngularModule
    ]
})
export class LandingPageModule {}