import {Component, Input} from '@angular/core'
import {ButtonFill, ElementSize, TextColor} from '@ezra-clients/common-ui'

@Component({
    selector: 'shr-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss']
})
export class ButtonComponent {
    @Input() fill = 'solid'
    @Input() text = 'Click Here'
    @Input() size: ElementSize = ElementSize.MEDIUM
    @Input() textColor: TextColor = TextColor.BLACK

    buttonSize = ElementSize
    buttonFill = ButtonFill
    color = TextColor
}