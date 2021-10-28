import { Component, OnInit } from '@angular/core';
import {Login} from "../../models/login";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //@ts-ignore
  public data: Login = {}

  public errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  submit(): void {
    this.authService.login(this.data)
      .subscribe((response: any) => {
        localStorage.setItem('auth_token', response.access_token);
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.errorMessage = "Error.";
      })
  }
}
