import {Component, Input} from '@angular/core'
import {InputTextModule} from 'primeng/inputtext'
import {SocialMediaComponent} from '../social-media/social-media.component'
import {FormsModule} from '@angular/forms'
import {UserIdentifierComponent} from '../user-identifier/user-identifier.component'

@Component({
    selector: 'shr-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss'],
    standalone: true,
    imports: [
        InputTextModule,
        SocialMediaComponent,
        FormsModule,
        UserIdentifierComponent
    ]
})
export class FooterComponent {
    userEmailAddress = ''
    @Input() username?: string
    sendEmail(): void {}
}
