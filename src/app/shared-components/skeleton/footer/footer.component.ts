import {Component} from '@angular/core'

@Component({
    selector: 'ptf-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})
export class FooterComponent {
    userEmailAddress = ''

    sendEmail(): void {}
}
