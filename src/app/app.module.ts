import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import * as $ from 'jquery';
import { SwiperModule } from 'angular2-swiper-wrapper';
import { SwiperConfigInterface } from 'angular2-swiper-wrapper';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';
import { PhotoComponent } from './photo/photo.component';
import { EntryUploadComponent } from './entry-upload/entry-upload.component';
import { FileUploadComponentComponent } from './file-upload-component/file-upload-component.component';
import { LoginComponent } from './login/login.component';
import { FeaturedArtistComponent } from './featured-artist/featured-artist.component';

const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboardControl: true
};

@NgModule({
  declarations: [
    AppComponent,
    PhotoViewerComponent,
    PhotoComponent,
    EntryUploadComponent,
    FileUploadComponentComponent,
    LoginComponent,
    FeaturedArtistComponent
  ],
  imports: [
    FileUploadModule,
    ModalModule,
    BrowserModule,
    SwiperModule.forRoot(SWIPER_CONFIG),
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'photos',
        component: PhotoViewerComponent
      },
      {
        path: 'featured-artist',
        component: FeaturedArtistComponent
      },
      { path: '', redirectTo: '/photos', pathMatch: 'full' },
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
