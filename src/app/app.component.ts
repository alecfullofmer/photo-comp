<<<<<<< Updated upstream
import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
=======
import { Component, ViewContainerRef } from '@angular/core';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< Updated upstream

=======
  title = 'app works!';
  
>>>>>>> Stashed changes
  private viewContainerRef: ViewContainerRef;

  public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}
