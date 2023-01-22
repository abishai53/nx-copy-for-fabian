import {Component, Input} from '@angular/core'

@Component({
    selector: 'shr-user-identifier',
    templateUrl: 'user-identifier.component.html',
    styleUrls: ['user-identifier.component.scss'],
    standalone: true
})
export class UserIdentifierComponent {
    _username = ''

    @Input() set username(userName: string | undefined) {
        this._username = userName ?? 'User'
    }
}