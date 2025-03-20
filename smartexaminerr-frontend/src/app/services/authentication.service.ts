import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user';
import { debug } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly url = 'http://localhost:3000/users/tokens/sign_in'
  private loggedUser?: string
  private isAuthenticateSubject = new BehaviorSubject<boolean>(false);
  private readonly JWT_TOKEN = 'JWT_TOKEN'
  private http = inject(HttpClient)
  
  
  constructor() { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  handleError(handleError: any){
    throw new Error('Method not implemented.');
  }
  
  login(user: {
    email: string, password: string
  }): Observable<any>{
    return this.http.post<User>(
      this.url, JSON.stringify(user), this.httpOptions
    ).pipe(
      tap((response: any) => this.doLoginUser(user.email, response.token))
    )
  }
  private doLoginUser(email: string, token: any): void {
    this.loggedUser = email
    this.storeToken(token)
    this.isAuthenticateSubject.next(true)
  }
  private storeToken(jwt_token: any) {
    localStorage.setItem(this.JWT_TOKEN, jwt_token)
  }
  
  logout() :any{
    localStorage.removeItem(this.JWT_TOKEN)
    this.isAuthenticateSubject.next(false)
    
  }

  isLoggedIn() {
    if(typeof localStorage !== 'undefined'){
      return !!localStorage.getItem(this.JWT_TOKEN)
    }else{
      return false
    }
    
  }
  
}
