import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../models/User';
import { UserService } from '../user.service';
@Component({
  selector: 'app-simple-user',
  templateUrl: './simple-user.component.html',
  styleUrls: ['./simple-user.component.css']
})
export class SimpleUserComponent  implements OnInit{
  users: User[] = [];
  searchTerm!: string;
  fullname: string|null = null;
  matricule: string|null = null;
  constructor(private userService: UserService, private authService: AuthService, private router:Router) {}
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
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
