import {NgModule} from '@angular/core'
import {LandingPageComponent} from './landing-page.component'
import {InputTextModule} from 'primeng/inputtext'
import {ButtonModule} from '@ezra-clients/components'
import {RouterLink} from '@angular/router'

@NgModule({
    declarations: [LandingPageComponent],
    exports: [LandingPageComponent],
    imports: [
        InputTextModule,
        ButtonModule,
        RouterLink
    ]
})
export class LandingPageModule {}