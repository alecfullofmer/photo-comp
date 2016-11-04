import { Component, OnInit} from '@angular/core';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Entry } from '../entry';
@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new Entry('', '');
  submitted = false;
  submitEntry() { this.submitted = true; alert(this.model.email + " " + this.model.instagram);}

}
