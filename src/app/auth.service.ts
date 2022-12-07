import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(email:string, password:string): Observable<any> {
    return this.http.post<any>(`/api/login`, { email, password})
  }
  logout(): Observable<any>  {
    return this.http.post<any>(`/api/logout`, null)
  }
  register(user: User): Observable<any>  {
    return this.http.post<any>(`/api/register`, {...user})
  }
}
