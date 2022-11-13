import {SlnHeaderComponent} from './sln-header.component'
import {NgModule} from '@angular/core'
import {UserIdentifierModule} from '../../../shared-components/user-identifier/user-identifier.module'

@NgModule({
    declarations: [SlnHeaderComponent],
    exports: [SlnHeaderComponent],
    imports: [
        UserIdentifierModule
    ]
})
export class SlnHeaderModule {}