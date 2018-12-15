import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './user/auth.service';
@Injectable()
export class AuthRoleGuardService implements CanActivate {
    
  constructor(public auth: AuthService, public router: Router) {}
  canActivate( route : ActivatedRouteSnapshot): boolean {
      console.log(this.auth.isLoggedIn() , '  :   ', this.auth.getUserRole() , '  :  ', route.data.expectedRole);
      
    if (this.auth.isLoggedIn() && this.auth.getUserRole() == route.data.expectedRole)  return true;
    return false;
  }
}