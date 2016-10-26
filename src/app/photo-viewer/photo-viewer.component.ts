import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';
import {PhotoComponent} from '../photo/photo.component';

// export for others scripts to use

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.css']
})

export class PhotoViewerComponent implements AfterViewInit {
  
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;
  example1SwipeOptions: any;
  
  photoUrls = [
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSyxZ8-4wrEy3qpz3BexqdJiYQRXZDn66AbNCOYzZG2FCv_5HKjgXyFMin",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYCbsJalTsCkYVuFiUTqm_GTr_j9yoT-M3zTy-RQ1mro_mkfjDOA",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTSZHw8xA7xl0sOtVcw1bVxx28fjKTu6PNpcxvbR-Zb28nrkJSTag",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_9UZyOpi0rv7mCwXxsAsMJ1-O-75pb_H0wvXBd905LYAIdx-1"
  ]
  
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
