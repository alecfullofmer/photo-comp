import { Component, ViewChild, OnInit } from '@angular/core';
import {PhotoComponent} from '../photo/photo.component';
import { PhotoService } from '../photo.service'

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.css'],
  providers: [PhotoService]
})

export class PhotoViewerComponent implements OnInit{
     
  photoUrls: string[];

  config: Object = {
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        };
  
  constructor(private photoService: PhotoService) {}
  
  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(): void {
      this.photoService.getCompetitionPhotos().then(photos => this.photoUrls = photos);
  }

}
