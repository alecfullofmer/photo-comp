import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  model = {
    email: '',
    password: ''
  };
  submitted = false;
  submitEntry() { this.submitted = true; alert(this.model.email + " " + this.model.password);}

}
