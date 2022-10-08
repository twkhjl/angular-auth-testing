import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://todo-api.twkhjl.duckdns.org/api/todo/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<any> {
    return this.http.get(API_URL + 'all', {
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
      withCredentials:true
    });
  }


}
