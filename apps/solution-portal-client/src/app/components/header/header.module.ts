import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [AsyncPipe, NgIf, OverlayPanelModule],
})
export class HeaderModule {}
