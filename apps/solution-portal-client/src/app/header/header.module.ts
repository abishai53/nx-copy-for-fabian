import {NgModule} from '@angular/core'
import {HeaderComponent} from './header.component'
import {UserIdentifierModule} from '@ezra-clients/components'
import {ButtonModule} from '../button/button.module'

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [
        UserIdentifierModule,
        ButtonModule
    ]
})
export class HeaderModule {}