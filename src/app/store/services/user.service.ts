import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({ username, password });
    return this.http.post('http://localhost:5000/api/login', body, {
      headers: headers,
    });
  }
  register(fname: string, lname: string, username: string, password: string): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({ fname, lname, username, password });
    return this.http.post('http://localhost:5000/api/register', body, {
      headers: headers,
    });
  }
  getUserDetails(token: string): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({ token });
    return this.http.post('http://localhost:5000/api/getUser', body, {
      headers: headers,
    });
  }
  changeUser(fname: string, lname: string, username: string): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({ fname, lname, username });
    return this.http.put('http://localhost:5000/api/changeUser', body, {
      headers: headers,
    });
  }
  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
