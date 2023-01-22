import {Component, Input} from '@angular/core'
import * as ElementConfig from '@ezra-clients/common-ui'
import {NgClass, NgSwitch, NgSwitchCase} from '@angular/common'

@Component({
    selector: 'shr-button',
    standalone: true,
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.scss'],
    imports: [
        NgSwitch,
        NgSwitchCase,
        NgClass
    ]
})
export class ButtonComponent {
    @Input() fill = 'solid'
    @Input() text = 'Click Here'
    @Input() size = ElementConfig.ElementSize.MEDIUM
    @Input() textColor = ElementConfig.TextColor.BLACK

    buttonSize = ElementConfig.ElementSize
    buttonFill = ElementConfig.ButtonFill
    color = ElementConfig.TextColor
}