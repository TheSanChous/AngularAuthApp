import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  get_decoded_token() : any {
    const helper = new JwtHelperService();
    const token: string = this.authService.get_token();
    return JSON.stringify(helper.decodeToken<JSON>(token));
  }
}
