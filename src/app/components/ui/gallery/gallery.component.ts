import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="flex flex-row flex-wrap gap-2">

  <img *ngFor="let image of images" [src]="image" alt="Gallery Image" />
  `,
})
export class GalleryComponent {
  @Input() public images: string[] = [];
}
