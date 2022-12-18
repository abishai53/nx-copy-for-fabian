import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'shr-back-arrow',
  standalone: true,
  imports: [CommonModule],
  template: '<img src="assets/back-arrow-black.svg" alt="envelope svg" (click)="back()" class="clickable">'
})
export class BackArrowComponent {
  constructor(private location: Location) {}
  back(): void { this.location.back()}
}

