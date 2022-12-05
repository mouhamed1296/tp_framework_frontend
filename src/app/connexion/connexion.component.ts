import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  
    title = 'tp_framework_frontend';
    registerForm!:FormGroup
    
    submitted=false
   
    constructor(private formBuilder:FormBuilder){}
    
    ngOnInit(){
      this.registerForm = this.formBuilder.group({
       
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
  


