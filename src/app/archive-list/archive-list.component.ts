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
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
