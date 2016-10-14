import { Component, OnInit } from '@angular/core';
import 'slick-carousel/slick/slick';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['../../node_modules/jquery/jquery.js']
})



export class PhotoViewerComponent implements OnInit {
  
  constructor() {  }
  
  ngOnInit() {
    jQuery('.carousel-class').slick({ autoplay: false, dots: true, fade: true, arrows: false });
  }

}
