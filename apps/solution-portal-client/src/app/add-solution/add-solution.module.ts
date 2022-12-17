import {NgModule} from '@angular/core'
import {AddSolutionComponent} from './add-solution.component'
import {BackArrowComponent} from '@ezra-clients/components'
import {ButtonModule} from 'primeng/button'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {InputTextModule} from 'primeng/inputtext'
import {InputTextareaModule} from 'primeng/inputtextarea'
import {InputNumberModule} from 'primeng/inputnumber'
import {DropdownModule} from 'primeng/dropdown'
import {InputSwitchModule} from 'primeng/inputswitch'
import {TooltipModule} from 'primeng/tooltip'

@NgModule({
    declarations: [AddSolutionComponent],
    exports: [AddSolutionComponent],
    imports: [
        BackArrowComponent,
        BackArrowComponent,
        BackArrowComponent,
        ButtonModule,
        ReactiveFormsModule,
        FormsModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        DropdownModule,
        InputSwitchModule,
        TooltipModule
    ]
})
export class AddSolutionModule {}