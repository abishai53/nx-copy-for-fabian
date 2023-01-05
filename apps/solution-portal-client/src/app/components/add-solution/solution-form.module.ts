import {NgModule} from '@angular/core'
import {SolutionFormComponent} from './solution-form.component'
import {BackArrowComponent, FormButtonsModule} from '@ezra-clients/components'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {InputTextModule} from 'primeng/inputtext'
import {InputTextareaModule} from 'primeng/inputtextarea'
import {InputNumberModule} from 'primeng/inputnumber'
import {DropdownModule} from 'primeng/dropdown'
import {InputSwitchModule} from 'primeng/inputswitch'
import {TooltipModule} from 'primeng/tooltip'
import {NgClass, NgForOf, NgIf} from '@angular/common'
import {MessageModule} from 'primeng/message'
import {MessagesModule} from 'primeng/messages'

@NgModule({
    declarations: [SolutionFormComponent],
    exports: [SolutionFormComponent],
    imports: [
        BackArrowComponent,
        BackArrowComponent,
        BackArrowComponent,
        ReactiveFormsModule,
        FormsModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        DropdownModule,
        InputSwitchModule,
        TooltipModule,
        FormButtonsModule,
        NgIf,
        NgForOf,
        MessageModule,
        NgClass,
        MessagesModule
    ]
})
export class SolutionFormModule {}