import {NgModule} from '@angular/core'
import {LandingPageComponent} from './landing-page.component'
import {InputTextModule} from 'primeng/inputtext'
import {ButtonModule} from '@ezra-clients/components'
import {RouterLink} from '@angular/router'
import {AsyncPipe, NgForOf, NgIf} from '@angular/common'
import {SolutionWidgetModule} from '../solution-widget/solution-widget.module'
import {MessageModule} from 'primeng/message'

@NgModule({
    declarations: [LandingPageComponent],
    exports: [LandingPageComponent],
    imports: [
        InputTextModule,
        ButtonModule,
        RouterLink,
        AsyncPipe,
        NgForOf,
        SolutionWidgetModule,
        NgIf,
        MessageModule
    ]
})
export class LandingPageModule {}