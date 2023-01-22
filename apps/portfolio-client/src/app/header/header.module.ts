import {NgIf} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterLink} from '@angular/router'
import {HeaderComponent} from './header.component'
import {SocialMediaComponent, UserIdentifierComponent} from '@ezra-clients/components'

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [
        RouterLink,
        NgIf,
        SocialMediaComponent,
        UserIdentifierComponent
    ]
})
export class HeaderModule {}