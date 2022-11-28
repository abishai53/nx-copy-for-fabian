import {NgIf} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterLink} from '@angular/router'
import {HeaderComponent} from './header.component'
import {SocialMediaModule} from '../../social-media/social-media.module'
import {UserIdentifierModule} from '../../user-identifier/user-identifier.module'

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