import { Component } from '@angular/core';
// import { SliderInterface } from './gallery/types/slide.interface';
// import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  constructor() {

  }

  // imgData: SliderInterface[] = [];

  // constructor(public dataService: DataService) {
  //   this.dataService.getJsonData().subscribe((res: any) => {
  //     // alert(JSON.stringify(res));
  //     this.imgData = res;
  //   });
  // }


  // slides: SliderInterface[] = [
  //   { url: '/assets/images/png/img-1.jpg', alt: 'crystal lake'},
  //   { url: '/assets/images/png/img-2.jpg', alt: 'crystal lake'},
  //   { url: '/assets/images/png/img-3.jpg', alt: 'crystal lake'},
  //   { url: '/assets/images/png/img-4.jpg', alt: 'crystal lake'},
  //   { url: '/assets/images/png/img-5.jpg', alt: 'crystal lake'},
  //   { url: '/assets/images/png/img-6.jpg', alt: 'crystal lake'},
  //   { url: '/assets/images/png/img-7.jpg', alt: 'crystal lake'},
  //   { url: '/assets/images/png/img-8.jpg', alt: 'crystal lake'},
  // ];

}
