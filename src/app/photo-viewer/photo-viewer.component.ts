import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

// export for others scripts to use

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.css']
})

export class PhotoViewerComponent implements AfterViewInit {
  
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;
  example1SwipeOptions: any;
  
  constructor() { 
      this.example1SwipeOptions = {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 5
    };
   }
  
  ngOnInit() {
    
  }
  
  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }


}
