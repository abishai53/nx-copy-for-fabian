import {NgModule} from '@angular/core'
import {FooterComponent} from './footer.component'
import {SocialMediaModule} from '../../social-media/social-media.module'
import {FormsModule} from '@angular/forms'
import {UserIdentifierModule} from '../../user-identifier/user-identifier.module'
import {InputTextModule} from 'primeng/inputtext'

@NgModule({
    declarations: [FooterComponent],
    exports: [FooterComponent],
    imports: [
        SocialMediaModule,
        FormsModule,
        UserIdentifierModule,
        InputTextModule
    ]
})
export class FooterModule {}