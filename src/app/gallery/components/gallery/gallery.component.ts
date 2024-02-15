import { Component, Input, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { SliderInterface } from '../../types/slide.interface';
// import { SliderInterface } from 'src/app/gallery/types/slide.interface';

/** @dynamic */
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

// @Directive({
//   standalone: true,
//   selector: '[appHighlight]',
// })


export class GalleryComponent implements OnInit {

  @ViewChild('ihCarouselInner') ihCarouselInner: ElementRef;
  @Inject('DOCUMENT') document: Document;

  constructor() {
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.onResize();
  }
  onResize() {
    setTimeout(() => {
      this.toggleCarouselBtns();
    }, 200);
  }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // onResize() {
  //   setTimeout(() => {
  //     this.toggleCarouselBtns()
  //   }, 200)
  // }

  @Input() slides: SliderInterface[] = [];

  currentIndex: number = 0;


  numberOfItems(num: number): number[] {
    return new Array(num);
  }

  onCarouselArrowClick(direction: any) {
    let carouselOffsetWidth = this.ihCarouselInner.nativeElement.offsetWidth;
    console.log(`carouselOffsetWidth = ${carouselOffsetWidth}`);
    let carouselItemWIdth = document.querySelector('.ih-carousel-item')?.clientWidth;
    console.log(`carouselItemWIdth = ${carouselOffsetWidth}`);

    // let carouselScrollWidth = this.ihCarouselInner.nativeElement.scrollWidth;

    if (direction == 'left')
      this.ihCarouselInner.nativeElement.scrollTo({
        left:
          this.ihCarouselInner.nativeElement.scrollLeft -
          carouselOffsetWidth + carouselItemWIdth!,
        behavior: 'smooth'
      });
    else
      this.ihCarouselInner.nativeElement.scrollTo({
        left:
          this.ihCarouselInner.nativeElement.scrollLeft +
          carouselOffsetWidth - carouselItemWIdth!,
        behavior: 'smooth'
      })
      console.log(`this.ihCarouselInner.nativeElement.scrollLeft = ${this.ihCarouselInner.nativeElement.scrollLeft}`);
      console.log(`carouselOffsetWidth = ${carouselOffsetWidth}`);
      console.log(`carouselItemWIdth = ${carouselItemWIdth!}`);

    setTimeout(() => {
      this.toggleCarouselBtns();
    }, 200);
  }

  toggleCarouselBtns() {
    let carouselScrollWidth = this.ihCarouselInner.nativeElement.scrollWidth;
    let carouselOffsetWidth = this.ihCarouselInner.nativeElement.offsetWidth;
    let scrollLeft = this.ihCarouselInner.nativeElement.scrollLeft;
    // let scrollLeft = 121;

    console.log(`scrollLeft = ${scrollLeft}`);

    let carouselPrevBtn: HTMLElement = document.getElementById('leftArrowCarousel')!;
    let carouselNextBtn: HTMLElement = document.getElementById('rightArrowCarousel')!;

    if (scrollLeft > 5) carouselPrevBtn.classList.remove('d-none');
    else carouselPrevBtn.classList.add('d-none');

    if (carouselOffsetWidth + scrollLeft + 25 >= carouselScrollWidth)
      carouselNextBtn.classList.add('d-none');
    else carouselNextBtn.classList.remove('d-none');
  }

  // onSwipe(swipe: any) {
  //   //swipe-right = 4 & swipe-left = 2
  //   console.log(swipe);
  //   if (swipe.direction == 4) {
  //     this.ihCarouselInner.nativeElement.scrollTo({
  //       left: this.ihCarouselInner.nativeElement.scrollLeft - swipe.distance,
  //       behavior: 'smooth'
  //     });
  //   }
  //   if (swipe.direction == 2) {
  //     this.ihCarouselInner.nativeElement.scrollTo({
  //       left: this.ihCarouselInner.nativeElement.scrollLeft + swipe.distance,
  //       behavior: 'smooth'
  //     });
  //   }
  //   console.log(swipe.direction);
  //   setTimeout(() => {
  //     this.toggleCarouselBtns();
  //   }, 200);
  // }

  // goToPreviousCarousel(): void {
  //   console.log('btnLeft');
  //   // const containerAllImg: any = document.getElementsByClassName('.container-all-img');
  //   // containerAllImg.left = -25;
  // }


  // goToNextCarousel(): void {

  //   // console.log('btnRight');

  //   let btnRight = document.getElementById('rightArrowCarousel');

  //   const containerAllImg: any = document.getElementById('container-all-img');
  //   // containerAllImg.style.left = 0;
  //   btnRight?.addEventListener('click', function() {
  //       console.log('btnRight');


  //       let p = 0;
  //       containerAllImg.style.left += p - 25 + '%';
  //     })

  //   // const containerAllImg: any = document.getElementsByClassName('.container-all-img');
  //   // containerAllImg.nativeElement.style.left = '-25';
  //   // containerAllImg.nativeElement.scrollTo({ left: (-25)});


  //   // let btnRight = document.getElementById('btnRight');

  //   // btnRight?.addEventListener('click', function() {
  //   //   console.log('btnRight');
  //   // })

  // }

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
