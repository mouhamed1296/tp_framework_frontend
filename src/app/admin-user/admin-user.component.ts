import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  users: User[] = [];
  fullname: string|null = null;
  matricule: string|null = null;
  photo: string|null = null;
  searchTerm!: string;
  archiveEmail!: string
  message: string = ''
  success: string = ''
  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}
  async ngOnInit() {
    if(!localStorage.getItem('matricule')) {
      this.router.navigate(['/']);
    }
    this.fullname = localStorage.getItem('fullname');
    this.matricule = localStorage.getItem('matricule');
    this.photo = localStorage.getItem('photo');
    this.getAllUsers();

  }
  async getAllUsers() {
    this.users = await this.userService.getUsers()
    this.users = this.users.filter(user => user.matricule !== this.matricule && user.etat === 1)
  }
  archive(e:any) {
    if (e.target.parentElement.value){
      this.archiveEmail = e.target.parentElement.value
    } else {
      this.archiveEmail = e.target.value
    }
    this.userService.archiveUser(this.archiveEmail).then((response) => {
      if(response.modifiedCount == 0) {
        this.message = "Archivage échoué"
        setTimeout(() => {
          this.message = ""
        }, 3000)
        return
      }
      this.success = "Archivé avec succés"
      this.users.forEach(user => {
        if (user.email === this.archiveEmail) {
         user.etat = 0
        }
      })
      this.users = this.users.filter(user => user.email === this.archiveEmail && user.etat === 0)
      setTimeout(() => {
        this.success = ""
      }, 2000)
    })

  }

  switchRole(e:any) {
    if (e.target.parentElement.value){
      this.archiveEmail = e.target.parentElement.value
    } else {
      this.archiveEmail = e.target.value
    }
    this.users.forEach(user => {
      if (user.email === this.archiveEmail) {
       user.role = user.role === 'admin' ? 'utilisateur' : 'admin'
      }
    })
    this.userService.switchRole(this.archiveEmail)
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
