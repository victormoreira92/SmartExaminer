import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  url = 'http://localhost:3000/users/tokens/sign_in'

  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  handleError(handleError: any){
    throw new Error('Method not implemented.');
  }

  login(user: any): Observable<any>{
    return this.http.post<User>(
      this.url, JSON.stringify(user), this.httpOptions
      ).pipe(
        tap(response => console.log(response))
      )
  }
  
  
}
