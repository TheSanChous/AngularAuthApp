import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Login} from "../models/login";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "https://localhost:5001/api/Auth/login";

  constructor(private http: HttpClient) { }

  login(data: Login): Observable<{}>{
    return this.http.post(this.url, data);
  }

  isLogin(): boolean {
    return localStorage.getItem("auth_token") != null;
  }

  logOut(): void {
    localStorage.removeItem("auth_token");
  }

  get_token(): string {
    const token = localStorage.getItem("auth_token");
    if (token != null) return token;
    return "";
  }
}
