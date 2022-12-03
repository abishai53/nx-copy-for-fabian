import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SocialMediaModule} from './social-media/social-media.module'
import {FooterModule} from './footer/footer.module'
import {UserIdentifierModule} from './user-identifier/user-identifier.module'

@NgModule({
  imports: [CommonModule],
  exports: [
      SocialMediaModule,
      FooterModule,
      UserIdentifierModule
  ],

})
export class ComponentsModule {}

