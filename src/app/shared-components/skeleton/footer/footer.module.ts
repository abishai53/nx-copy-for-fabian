import {NgModule} from '@angular/core'
import {FooterComponent} from './footer.component'
import {InputTextModule} from 'primeng/inputtext'
import {SocialMediaModule} from '../../social-media/social-media.module'
import {FormsModule} from '@angular/forms'
import {UserIdentifierModule} from '../../user-identifier/user-identifier.module'

@NgModule({
    declarations: [FooterComponent],
    exports: [FooterComponent],
    imports: [
        InputTextModule,
        SocialMediaModule,
        FormsModule,
        UserIdentifierModule
    ]
})
export class FooterModule {}