import {Component, Input} from '@angular/core'
import {SlpButtonFill, SlpElementSize, SlpTextColor} from '../utility-files/slp-element-config'

@Component({
    selector: 'slp-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss']
})
export class ButtonComponent {
    @Input() fill = 'solid'
    @Input() text = 'Click Here'
    @Input() size: SlpElementSize = SlpElementSize.MEDIUM
    @Input() textColor: SlpTextColor = SlpTextColor.BLACK

    buttonSize = SlpElementSize
    buttonFill = SlpButtonFill
    color = SlpTextColor
}