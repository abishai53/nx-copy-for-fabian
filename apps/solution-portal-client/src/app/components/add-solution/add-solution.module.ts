import {NgModule} from '@angular/core'
import {AddSolutionComponent} from './add-solution.component'
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
    declarations: [AddSolutionComponent],
    exports: [AddSolutionComponent],
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
export class AddSolutionModule {}