import {Component} from '@angular/core'
import {ButtonFill, ElementSize, TextColor} from '@ezra-clients/common-ui'

@Component({
    selector: 'slp-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
    userName = 'Ezra Orina'
    buttonSize = ElementSize.SMALL
    buttonFill = ButtonFill.LINEAR
    textColor = TextColor.WHITE
}