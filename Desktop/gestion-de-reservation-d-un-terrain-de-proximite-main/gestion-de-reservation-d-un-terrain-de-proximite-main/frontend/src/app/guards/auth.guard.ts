/*
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
*/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {AuthenticationService} from "../services/authentication/authentication.service";


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      // Allow access for both admin and proprietaireTerrain users
      if (user.role === 'admin' || user.role === 'proprietaireTerrain') {
        console.log('Access granted for role:', user.role);
        return true;
      }
    }
    
    console.log('Access denied - redirecting to terrains');
    this.router.navigate(['/terrains']);
    return false;
  }
}
