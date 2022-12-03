import {Component} from '@angular/core'

@Component({
    selector: 'shr-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})
export class FooterComponent {
    userEmailAddress = ''

    sendEmail(): void {}
}
