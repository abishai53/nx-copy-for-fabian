import {NgModule} from '@angular/core'
import {LandingPageComponent} from './landing-page.component'
import {InputTextModule} from 'primeng/inputtext'
import {ButtonComponent} from '@ezra-clients/components'
import {RouterLink} from '@angular/router'
import {AsyncPipe, NgForOf, NgIf} from '@angular/common'
import {SolutionWidgetModule} from '../solution-widget/solution-widget.module'
import {MessageModule} from 'primeng/message'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {PipesModule} from '@ezra-clients/common-ui'

@NgModule({
    declarations: [LandingPageComponent],
    exports: [LandingPageComponent],
    imports: [
        InputTextModule,
        ButtonComponent,
        RouterLink,
        AsyncPipe,
        NgForOf,
        SolutionWidgetModule,
        NgIf,
        MessageModule,
        FormsModule,
        ReactiveFormsModule,
        PipesModule
    ]
})
export class LandingPageModule {}
