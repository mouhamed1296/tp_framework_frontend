import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent {
  title = 'tp_framework_frontend';
  registerForm!:FormGroup
  
  submitted=false
 /* on a injecter formbuilder de type formbuilder */
  constructor(private formBuilder:FormBuilder){}
 
  /* on appel formbuilder & le group et lister les champs */
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$")]],
        prenom:['',[Validators.required]],
        nom:['',[Validators.required]],
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
