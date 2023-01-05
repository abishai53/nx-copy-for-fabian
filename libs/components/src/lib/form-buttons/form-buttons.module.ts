import {NgModule} from '@angular/core'
import {FormButtonsComponent} from './form-buttons.component'
import {ButtonModule} from 'primeng/button'
import {ConfirmDialogModule} from 'primeng/confirmdialog'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgIf} from '@angular/common'

@NgModule({
    declarations: [FormButtonsComponent],
    exports: [FormButtonsComponent],
    imports: [
        ButtonModule,
        ConfirmDialogModule,
        BrowserAnimationsModule,
        NgIf
    ]
})
export class FormButtonsModule {}