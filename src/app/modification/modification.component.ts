import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../user.service';
@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent {
  title = 'tp_framework_frontend';
  registerForm!:FormGroup
  ancienEmail: string = ''
  submitted=false
  donne!:any
  message:string=''
  success: string = ''
 /* on a injecter formbuilder de type formbuilder */
  constructor(private formBuilder:FormBuilder, private router:Router, private route: ActivatedRoute, private userService: UserService){
    this.registerForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$")]],
        prenom:['',[Validators.required]],
        nom:['',[Validators.required]],
    })
    this.registerForm.valueChanges.subscribe((changes) => {
      this.donne = {...changes}
    })
  }

  /* on appel formbuilder & le group et lister les champs */
  ngOnInit(){
    this.ancienEmail = this.route.snapshot.queryParams['email']
    this.userService.getUserByEmail(this.ancienEmail).then((user) => {
      this.registerForm.controls['email'].setValue(user.email)
      this.registerForm.controls['prenom'].setValue(user.prenom)
      this.registerForm.controls['nom'].setValue(user.nom)
    })
  }

  onSubmit(){
    this.submitted = true

    if(this.registerForm.invalid ){
      return
    }
    this.userService.updateUser(this.donne.email, this.donne.nom, this.donne.prenom, this.ancienEmail)
    .then(response => {
      if(response.mailExist) {
        this.message = "Le mail entré existe déja";
        setTimeout(() => {
          this.message = ""
        }, 3000)
        return
      }
      if(response.modifiedCount == 0) {
        this.message = "Modification échoué"
        setTimeout(() => {
          this.message = ""
        }, 3000)
        return
      }
      this.success = "Modification réussie"
      setTimeout(() => {
        this.router.navigate(['/admin'])
      }, 2000)
    })
  }
}
