import {NgIf} from '@angular/common'
import {Component, EventEmitter, Input, Output} from '@angular/core'
import {ConfirmationService} from 'primeng/api'
import {ButtonModule} from 'primeng/button'
import {ConfirmDialogModule} from 'primeng/confirmdialog'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@Component({
    selector: 'shr-forms-buttons',
    templateUrl: 'form-buttons.component.html',
    styleUrls: ['form-buttons.component.scss'],
    providers: [ConfirmationService],
    standalone: true,
    imports: [
        ButtonModule,
        ConfirmDialogModule,
        BrowserAnimationsModule,
        NgIf
    ]
})
export class FormButtonsComponent {
    @Output() save = new EventEmitter()
    @Output() delete = new EventEmitter()
    @Output() cancel = new EventEmitter()

    @Input() hideDelete = false
    @Input() hideCancel = false
    @Input() hideSave = false

    @Input() disableDelete = false
    @Input() disableCancel = false
    @Input() disableSave = false

    @Input() deleteLabel = 'Delete'
    @Input() cancelLabel = 'Cancel'
    @Input() saveLabel = 'Save'

    @Input() buttonWidth = 250

    constructor(private confirmationService: ConfirmationService) {}

    confirmDelete() {
        this.confirmationService.confirm({
            message: `${this.deleteLabel}?`,
            accept: () => this.delete.emit()
        })
    }

    confirmCancel() {
        this.confirmationService.confirm({
            message: `${this.cancelLabel}?`,
            accept: () => this.cancel.emit()
        })
    }

    confirmSave() {
        this.confirmationService.confirm({
            message: `${this.saveLabel}?`,
            accept: () => this.save.emit()
        })
    }
}