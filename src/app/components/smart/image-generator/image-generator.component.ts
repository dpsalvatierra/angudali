import { Component, inject } from '@angular/core';
import { GalleryComponent } from "../../ui/gallery/gallery.component";
import { PromptComponent } from "../../ui/prompt/prompt.component";
import { CommonModule } from '@angular/common';
import { ImageGeneratorService } from '../../../data-access/image-generator.service';
import { BehaviorSubject, combineLatest, map, of, switchMap } from 'rxjs';

@Component({
    selector: 'app-image-generator',
    standalone: true,
        template: `
    <div *ngIf="vm$ | async as vm">
      <app-prompt (prompted)="prompted($event)"></app-prompt>

      <p *ngIf="vm.prompt">Requesting images for: {{ vm.prompt }} </p>

      <app-gallery [images]="vm.images"></app-gallery>
      
    </div>
      `,
    styles: ``,
    imports: [CommonModule, GalleryComponent, PromptComponent]
})
export class ImageGeneratorComponent {

  private readonly imageGenerator = inject(ImageGeneratorService);

  private readonly prompt$$ = new BehaviorSubject<string>('');
  private readonly prompt$ = this.prompt$$.asObservable();

  private readonly images$ = this.prompt$.pipe(
    switchMap((value :string) => {
      if (!value) {
        return of([]);
      }
      return this.imageGenerator.getImages(value, 3);
    })
  );
  
public readonly vm$ = combineLatest([this.prompt$, this.images$])
      .pipe(
        map(([prompt, images]) => ({ 
        prompt,
        images 
      })));

  public prompted(value: string): void {
    this.prompt$$.next(value);
  }

}