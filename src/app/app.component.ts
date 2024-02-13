import { Component } from '@angular/core';
import { SliderInterface } from './gallery/types/slide.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  slides: SliderInterface[] = [
    { url: '\assets\images\png\img-1.jpg', title: 'crystal lake'},
    { url: '\assets\images\png\img-2.jpg', title: 'crystal lake'},
    { url: '\assets\images\png\img-3.jpg', title: 'crystal lake'},
    { url: '\assets\images\png\img-4.jpg', title: 'crystal lake'},
    { url: '\assets\images\png\img-5.jpg', title: 'crystal lake'},
    { url: '\assets\images\png\img-6.jpg', title: 'crystal lake'},
    { url: '\assets\images\png\img-7.jpg', title: 'crystal lake'},
    { url: '\assets\images\png\img-8.jpg', title: 'crystal lake'},
  ];
}
