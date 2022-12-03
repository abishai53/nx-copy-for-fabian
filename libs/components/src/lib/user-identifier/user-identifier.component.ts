import {Component, Input} from '@angular/core'

@Component({
    selector: 'shr-user-identifier',
    templateUrl: 'user-identifier.component.html',
    styleUrls: ['user-identifier.component.scss']
})
export class UserIdentifierComponent {
    @Input() username = 'Ezra Orina'
}