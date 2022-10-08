import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://todo-api.twkhjl.duckdns.org/api/auth/';

const httpOptions = {
  headers: new HttpHeaders(
    {
    'Content-Type': 'application/json',
    'Accept': 'application/json',

  }),
  withCredentials:true

};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(name: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        name,
        password,
      },
      httpOptions
    );
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        name,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout', { }, httpOptions);
  }
}
