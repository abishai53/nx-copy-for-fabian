import {NgModule} from '@angular/core'
import {HeaderComponent} from './header.component'
import {UserIdentifierModule, ButtonModule} from '@ezra-clients/components'

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [
        UserIdentifierModule,
        ButtonModule
    ]
})
export class HeaderModule {}