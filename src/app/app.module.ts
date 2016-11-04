import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import * as $ from 'jquery';
import {KSSwiperModule} from 'angular2-swiper';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoViewerComponent,
    PhotoComponent,
    PhotoUploadComponent
  ],
  imports: [
    ModalModule,
    BrowserModule,
    KSSwiperModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'photos',
        component: PhotoViewerComponent
      },
      { path: '', redirectTo: '/photos', pathMatch: 'full' },
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
