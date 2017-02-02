import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import * as $ from 'jquery';
import { SwiperModule } from '../../node_modules/angular2-useful-swiper';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { ModalModule } from 'ng2-bootstrap';
import { ComponentLoaderFactory } from 'ng2-bootstrap/component-loader';
import { AppComponent } from './app.component';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';
import { PhotoComponent } from './photo/photo.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { EntryUploadComponent } from './entry-upload/entry-upload.component';
import { FileUploadComponentComponent } from './file-upload-component/file-upload-component.component';
import { LoginComponent } from './login/login.component';
import { FeaturedArtistComponent } from './featured-artist/featured-artist.component';
import { PhotoService } from './photo.service'

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
    ModalModule.forRoot(),
    BrowserModule,
    SwiperModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
  providers: [PhotoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
