import {NgModule} from '@angular/core'
import {SolutionWidgetComponent} from './solution-widget.component'
import {ImagekitioAngularModule} from 'imagekitio-angular'
import {NgClass, NgIf} from '@angular/common'
import {ProgressSpinnerModule} from 'primeng/progressspinner'

@NgModule({
    declarations: [SolutionWidgetComponent],
    exports: [SolutionWidgetComponent],
    imports: [ImagekitioAngularModule, NgClass, NgIf, ProgressSpinnerModule]
})
export class SolutionWidgetModule {}