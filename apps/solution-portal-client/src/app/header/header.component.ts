import {Component} from '@angular/core'
import {SlpButtonFill, SlpElementSize, SlpTextColor} from '../utility-files/slp-element-config'

@Component({
    selector: 'slp-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
    userName = 'Ezra Orina'
    buttonSize = SlpElementSize.SMALL
    buttonFill = SlpButtonFill.LINEAR
    textColor = SlpTextColor.WHITE
}