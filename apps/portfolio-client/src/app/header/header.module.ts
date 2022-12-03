import {NgIf} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterLink} from '@angular/router'
import {HeaderComponent} from './header.component'
import {SocialMediaModule, UserIdentifierModule} from '@ezra-clients/components'

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [
        RouterLink,
        NgIf,
        SocialMediaModule,
        UserIdentifierModule
    ]
})
export class HeaderModule {}