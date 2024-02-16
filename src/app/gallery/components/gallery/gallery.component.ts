import { Component, Input, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { SliderInterface } from '../../types/slide.interface';
import { HttpClient } from '@angular/common/http';
import { Console } from 'console';
import { DataService } from '../../../data.service';

/** @dynamic */
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {

  @ViewChild('containerAllImg') containerAllImg: ElementRef;
  @Inject('DOCUMENT') document: Document;

  imgData: SliderInterface[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getJsonData().subscribe((res: any) => {
      // alert(JSON.stringify(res));
      this.imgData = res;
      console.log(this.imgData);
    });
  }


  ngOnInit(): void {}
  onResize(){}

  currentIndex: number = 0;


  numberOfItems(num: number): number[] {
    return new Array(num);
  }

  onCarouselArrowClick(direction: any) {
    let carouselOffsetWidth = this.containerAllImg.nativeElement.offsetWidth;
    let carouselItemWIdth = document.querySelector('.carousel-item')?.clientWidth;

    if (direction == 'left')
      this.containerAllImg.nativeElement.scrollTo({
        left:
          this.containerAllImg.nativeElement.scrollLeft -
          carouselOffsetWidth + carouselItemWIdth!,
        behavior: 'smooth'
      });
    else
      this.containerAllImg.nativeElement.scrollTo({
        left:
          this.containerAllImg.nativeElement.scrollLeft +
          carouselOffsetWidth - carouselItemWIdth!,
        behavior: 'smooth'
      });
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }

  goToNext(): void {
    const IS_LAST_SLIDE: boolean = this.currentIndex === this.imgData.length - 1;
    const NEW_INDEX: number = IS_LAST_SLIDE ? 0 : this.currentIndex + 1;
    this.currentIndex = NEW_INDEX;
  }

  goToPrevious(): void {
    const IS_FIRST_SLIDE = this.currentIndex === 0;
    const NEW_INDEX: number = IS_FIRST_SLIDE ? this.imgData.length - 1 : this.currentIndex - 1;
    this.currentIndex = NEW_INDEX;
  }

  getCurrentSlideUrl(): string {
    return `url('${this.imgData[this.currentIndex].url}')`;
  }

}
