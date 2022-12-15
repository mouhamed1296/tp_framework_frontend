import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { UserService } from '../user.service';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent implements OnInit {
  profilePicture!: string;
  /* urllink: string ="assets/image/sarr.png"; */
  title = "ReactiveForms";
  donne: any;
  message: string | null = null
  error: string | null = null;

  constructor (private userService: UserService) {
    this.tpForm.valueChanges.subscribe((value) => {
      this.donne = value
      if (this.donne.mdp !== this.donne.cmdp) {
        this.tpForm.controls.cmdp.setErrors(Validators.pattern(this.donne.mdp),)
      }
    })
   }


   ngOnInit(): void {}

//Déclaration formgroup pour les controles de saisie
  tpForm = new FormGroup ({
    prenom: new FormControl('',[Validators.required, ]),
    nom: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email,]),
    role: new FormControl('',Validators.required),
    mdp: new FormControl('', [Validators.required,Validators.minLength(6)]),
    cmdp: new FormControl('', [Validators.required ,Validators.minLength(6)])
   });

ProfilePicture(e: any) {
    this.getBase64(e.target.files[0])
        .subscribe((str: string) => {
          console.log(str);

          this.profilePicture = str
        });
  }

   getBase64(file: Blob): Observable<string> {
    console.log(file);

    return new Observable<string>(sub => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        sub.next(reader.result?.toString());
        sub.complete();
      };
      reader.onerror = error => {
        sub.error(error);
      };
    })
  }
  /*  selectFiles(event:any){
    if (event.target.files){
    var  reader =new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.urllink = event.target.result
       }
    }
   } */

   options = [
    {value: "", description: ""},
    {value: "admin", description: "Admin"},
    {value: "utilisateur", description: "Utilisateur"},
   ]

  imageService: any;
   changeRole(e: any) {
    this.tpForm.controls.role?.setValue(e.target.value, {onlySelf: true})
   }

  //Générer le matricule de l'utilisateur
  generateMatricule(length: number): string {
    let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return 'MU2022/' + result;
  }

  async onSubmit(){
    this.donne.matricule = this.generateMatricule(4);
    this.donne.etat = 1;
    this.donne.date_inscription = new Date().toDateString();
    this.donne.date_modification = null;
    this.donne.date_archivage = null;
    this.donne.photo = this.profilePicture;
    console.log(this.donne.photo);


    delete this.donne.cmdp;

    //Récupérer l'utilisateur par son mail si elle existe
    let user: User| null = null;
    this.userService.getUserByEmail(this.donne.email).then((user) => {
      user = user
    });

    //Verifier si un utilisateur avec le même email existe déja
    if (user == null) {
      //Si le mail existe enregistrer
      let reponse = await this.userService.addUser(this.donne);
      if(reponse) {
        this.message = "Incription réussie";
      }
    } else {
      //Si un utilisateur avec le même email existe
      this.error = "Email existe déja";
    }
  }
}
