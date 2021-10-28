import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    switch (state.url) {
      case '/login':
        if (this.authService.isLogin()) return false;
        break;
      case '/account':
        if (!this.authService.isLogin()) {
          this.router.navigateByUrl('/login');
          return false;
        }
        break;
    }
    return true;
  }

}
