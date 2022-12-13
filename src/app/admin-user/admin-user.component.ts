import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
