import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthGuardLogged implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (sessionStorage.getItem('user') != null) {
      console.log("User already logged in, redirecting to terrains");
      // User is already logged in, redirect to some other route (e.g., dashboard)
      this.router.navigate(['/terrains']);
      return false; // Prevent access to login page
    } else {
      console.log("No user in session, allowing access to login");
      return true; // Allow access to the login page
    }
  }
}
