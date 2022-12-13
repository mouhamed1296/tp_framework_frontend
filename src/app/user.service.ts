import { Injectable } from '@angular/core';
import { collection } from './database/db';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection: any
  constructor() {
    this.usersCollection = collection;
  }

  //Récupération des utilisateur au niveau de la base de données
  async getUsers() {
    return await this.usersCollection.find()
  }

  //Inscription d'un utilisateur au niveau de la base de données
  async addUser(user: User) {
    return await this.usersCollection.insertOne(user);
  }

  /* //
  async addUsers(users: User[]) {
    return await this.usersCollection.insertMany(users);
  } */
  //Récupération d'un utilisateur au niveau de la base de don
  async getUserByEmail(email: string) {
    return this.usersCollection.findOne({ email: email });
  }
}
