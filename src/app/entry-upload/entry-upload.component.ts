import { Component, OnInit} from '@angular/core';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Entry } from '../entry';
@Component({
  selector: 'app-entry-upload',
  templateUrl: './entry-upload.component.html',
  styleUrls: ['./entry-upload.component.css']
})
export class EntryUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new Entry('', '', '', '', '');
  submitted = false;
  submitEntry() { this.submitted = true; alert(this.model.email + " " + this.model.instagram);}

}
