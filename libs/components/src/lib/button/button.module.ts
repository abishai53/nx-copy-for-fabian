import {NgModule} from '@angular/core'
import {ButtonComponent} from './button.component'
import {NgClass, NgSwitch, NgSwitchCase} from '@angular/common'

@NgModule({
    declarations: [ButtonComponent],
    exports: [ButtonComponent],
    imports: [
        NgSwitch,
        NgSwitchCase,
        NgClass
    ]
})
export class ButtonModule {}