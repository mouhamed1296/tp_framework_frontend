import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User';
import { collection } from './database/db';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usersCollection: any
  constructor() {
    this.usersCollection = collection;
  }
  login(email:string, password:string) {
    let user = null;
    return this.usersCollection.findOne({ email: email, mdp: password})
    /* console.log(email, password); */
  }
  logout() {
    localStorage.removeItem('nom')
    localStorage.removeItem('prenom')
    localStorage.removeItem('matricule')
  }
}
