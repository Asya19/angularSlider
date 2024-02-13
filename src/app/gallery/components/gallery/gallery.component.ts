import { Component, Input } from '@angular/core';
import { SliderInterface } from '../../types/slide.interface';
// import { SliderInterface } from 'src/app/gallery/types/slide.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  /**
   *
   */
  constructor() {}

  @Input() slides: SliderInterface[] = [];

  currentIndex: number = 0;

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }

  goToNext(): void {
    const IS_LAST_SLIDE: boolean = this.currentIndex === this.slides.length - 1;
    const NEW_INDEX: number = IS_LAST_SLIDE ? 0 : this.currentIndex + 1;
    this.currentIndex = NEW_INDEX;

  }

  goToPrevious(): void {
    const IS_FIRST_SLIDE = this.currentIndex === 0;
    const NEW_INDEX: number = IS_FIRST_SLIDE ? this.slides.length - 1 : this.currentIndex - 1;
    this.currentIndex = NEW_INDEX;
  }

  getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

}
