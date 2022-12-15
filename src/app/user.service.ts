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
    return await this.usersCollection.findOne({ email: email });
  }

  async updateUser(email: string, nom: string, prenom: string, ancienEmail: string) {
    if(ancienEmail !== email) {
      const user = await this.getUserByEmail(email)
      if(user) {
        return new Promise<any>((resolve, reject) => {
          resolve({modifiedCount: 0, mailExist: true})
        })
      }
    }

    return await this.usersCollection.updateOne({ email: ancienEmail},
      {
        $set: { prenom: prenom, nom: nom, email: email},
        $currentDate: {date_modification: true}
      }
    )
  }

  async archiveUser(email: string) {
    return await this.usersCollection.updateOne({ email: email},
      {
        $set: {etat: 0},
        $currentDate: {date_archivage: true}
      })
  }
  async desarchiveUser(email: string) {
    return await this.usersCollection.updateOne({ email: email},
      {
        $set: {etat: 1, date_archivage: null},
      })
  }
  async switchRole(email: string) {
    let newRole
    const user = await this.getUserByEmail(email)
    newRole = user.role === 'admin' ? 'utilisateur' : 'admin'
    return await this.usersCollection.updateOne({ email: email},
      {
        $set: {role: newRole},
      })
  }
}
