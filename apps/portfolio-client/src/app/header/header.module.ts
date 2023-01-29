import {
  UserIdentifierComponent,
  SocialMediaComponent,
} from '@ezra-clients/components';
import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [RouterLink, NgIf, UserIdentifierComponent, SocialMediaComponent],
})
export class HeaderModule {}
