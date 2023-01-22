import {NgModule} from '@angular/core'
import {SolutionWidgetComponent} from './solution-widget.component'
import {NgClass, NgIf} from '@angular/common'
import {ProgressSpinnerModule} from 'primeng/progressspinner'
import {DialogModule} from 'primeng/dialog'
import {ButtonModule} from 'primeng/button'

@NgModule({
    declarations: [SolutionWidgetComponent],
    exports: [SolutionWidgetComponent],
    imports: [
        NgClass,
        NgIf,
        ProgressSpinnerModule,
        DialogModule,
        ButtonModule
    ]
})
export class SolutionWidgetModule {}