import {NgModule} from '@angular/core'
import {HeaderComponent} from './header.component'
import {UserIdentifierComponent, ButtonComponent} from '@ezra-clients/components'
import {AsyncPipe, NgIf} from '@angular/common'
import {OverlayPanelModule} from 'primeng/overlaypanel'

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [
        UserIdentifierComponent,
        ButtonComponent,
        AsyncPipe,
        NgIf,
        OverlayPanelModule
    ]
})
export class HeaderModule {}