import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

    title = 'tp_framework_frontend';
    registerForm!:FormGroup
    donne: any = {};

    submitted=false
   /* on a injecter formbuilder de type formbuilder */
    constructor(private formBuilder:FormBuilder, private authService:AuthService, private router:Router){
      this.registerForm = this.formBuilder.group({
        email:['',[Validators.required,Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$")]],
        password:['',[Validators.required,Validators.minLength(6)]]
      })

      //Récupération des données
      this.registerForm.valueChanges.subscribe((data) => {
      this.donne = {...data}

      }
      )
    }

    /* on appel formbuilder & le group et lister les champs */
    ngOnInit(){
      /* this.registerForm = this.formBuilder.group({
        email:['',[Validators.required,Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$")]],
        password:['',[Validators.required,Validators.minLength(6)]]
      }) */
    }

    onSubmit(){
      this.submitted = true

      if(this.registerForm.invalid){
        return
      }
     const reponse = this.authService.login(this.donne.email, this.donne.password);
     reponse.then((user: any) =>
     {
      if(user) {
        localStorage.setItem('fullname', user.prenom + ' ' + user.nom)
        localStorage.setItem('matricule', user.matricule)
        if (user.role === 'admin') {
          this.router.navigate(['/admin'])
        } else {
          this.router.navigate(['/simple'])
        }
       } else {
        alert("error");
      }
     })


    }
  }


