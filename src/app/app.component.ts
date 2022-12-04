 import { Component } from '@angular/core';
 import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp_framework_frontend';

  emailid:any;
  userlogin:any;
  constructor() { }
  ngOnInit() {
     this.userlogin = new FormGroup({
        emailid: new FormControl(),
        passwd: new FormControl()
     });
  }
  onClickSubmit(data:any) {this.emailid = data.emailid; this.userlogin = data.passwd;}
 
}



