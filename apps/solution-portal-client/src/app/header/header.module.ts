import {NgModule} from '@angular/core'
import {HeaderComponent} from './header.component'
import {UserIdentifierModule} from '@ezra-clients/components'

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [
        UserIdentifierModule
    ]
})
export class HeaderModule {}