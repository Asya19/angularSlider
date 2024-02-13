import { Component, Input } from '@angular/core';
import { SliderInterface } from '../../types/slide.interface';
// import { SliderInterface } from 'src/app/gallery/types/slide.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @Input() slides: SliderInterface[] = [];
}
