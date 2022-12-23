import {Component, EventEmitter, Input, Output} from '@angular/core'
import {ConfirmationService} from 'primeng/api'

@Component({
    selector: 'shr-forms-buttons',
    templateUrl: 'form-buttons.component.html',
    styleUrls: ['form-buttons.component.scss'],
    providers: [ConfirmationService]
})
export class FormButtonsComponent {
    @Output() onSave = new EventEmitter
    @Output() onDelete = new EventEmitter
    @Output() onCancel = new EventEmitter

    @Input() hideDelete = true
    @Input() hideCancel = true
    @Input() hideSave = true

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
            message: this.deleteLabel + '?',
            accept: () => this.onDelete.emit()
        })
    }

    confirmCancel() {
        this.confirmationService.confirm({
            message: this.cancelLabel + '?',
            accept: () => this.onCancel.emit()
        })
    }

    confirmSave() {
        this.confirmationService.confirm({
            message: this.saveLabel + '?',
            accept: () => this.onSave.emit()
        })
    }
}