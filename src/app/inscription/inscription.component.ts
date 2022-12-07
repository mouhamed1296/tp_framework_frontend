import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {
  title = "ReactiveForms";
  donne: any
  tpForm = new FormGroup ({
    prenom: new FormControl('',[Validators.required, ]),
    nom: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email,]),
    role: new FormControl('',Validators.required),
    mdp: new FormControl('', [Validators.required,Validators.minLength(6)]),
    cmdp: new FormControl('', [Validators.required ,Validators.minLength(6)])
   });

   /* onFileSelected(event){

   } */

   options = [
    {value: "", description: ""},
    {value: "admin", description: "Admin"},
    {value: "simple", description: "Utilisateur"},
   ]

   changeRole(e: any) {
    this.tpForm.controls.role?.setValue(e.target.value, {onlySelf: true})
   }

   constructor () {
    this.tpForm.valueChanges.subscribe((value) => {
      this.donne = value
      console.log(value.role);
      if (this.donne.mdp !== this.donne.cmdp) {
        this.tpForm.controls.cmdp.setErrors(Validators.pattern(this.donne.mdp),)
      }
    })
   }

   ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.tpForm);
  }
}
