import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import * as $ from 'jquery';
import {KSSwiperModule} from 'angular2-swiper';
import { AppComponent } from './app.component';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoViewerComponent
  ],
  imports: [
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
