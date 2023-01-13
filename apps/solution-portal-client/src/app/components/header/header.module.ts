import {NgModule} from '@angular/core'
import {HeaderComponent} from './header.component'
import {UserIdentifierModule, ButtonModule} from '@ezra-clients/components'
import {AsyncPipe, NgIf} from '@angular/common'
import {OverlayPanelModule} from 'primeng/overlaypanel'

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [
        UserIdentifierModule,
        ButtonModule,
        AsyncPipe,
        NgIf,
        OverlayPanelModule
    ]
})
export class HeaderModule {}