import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.css']
})
export class ArchiveListComponent {
  users: User[] = [];
  fullname: string|null = null;
  matricule: string|null = null;
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
    this.getAllUsers();

  }
  async getAllUsers() {
    this.users = await this.userService.getUsers()
    this.users = this.users.filter(user => user.matricule !== this.matricule && user.etat === 0)
  }
  desarchiveUser(e:any) {
    if (e.target.parentElement.value){
      this.archiveEmail = e.target.parentElement.value
    } else {
      this.archiveEmail = e.target.value
    }
    this.userService.desarchiveUser(this.archiveEmail).then((response) => {
      if(response.modifiedCount == 0) {
        this.message = "Désarchivage échoué"
        setTimeout(() => {
          this.message = ""
        }, 3000)
        return
      }
      this.success = "Désarchivé avec succés"
      this.users.forEach(user => {
        if (user.email === this.archiveEmail) {
         user.etat = 1
        }
      })
      this.users = this.users.filter(user => user.email !== this.archiveEmail && user.etat !== 1)
      setTimeout(() => {
        this.success = ""
      }, 3000)
      this.router.navigate(['/admin']);
    })
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
