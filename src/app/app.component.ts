 import { Component } from '@angular/core';
 import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp_framework_frontend';
  registerForm!:FormGroup
  
  submitted=false
 
  constructor(private formBuilder:FormBuilder){}
  
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(4)]],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  onSubmit(){
    this.submitted = true
    
    if(this.registerForm.invalid){
      return 
    }
    alert("Success")
  }
  }


