import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {SharedService} from "../../../services/shared.service";
import {HeaderSectionComponent} from "../header-section/header-section.component";
import {FooterComponent} from "../footer/footer.component";
import {InfoTabComponent} from "../info-tab/info-tab.component";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ToastrService} from "ngx-toastr";
import {User} from "../../../models/user";

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    FormsModule,
    HeaderSectionComponent,
    FooterComponent,
    InfoTabComponent,
    NavBarComponent,
    ReactiveFormsModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {



  credentials = { email: '', password: '' };
  private isAuthenticated: boolean =false;

  constructor(private toastr: ToastrService,private authService: AuthenticationService, private sharedService: SharedService, private router: Router) {}

  onSubmit() {
    console.log('Login form submitted with credentials:', this.credentials);
    
    // Validate form first
    if (!this.credentials.email || !this.credentials.password) {
      this.showError('Veuillez remplir tous les champs.');
      return;
    }

    // Call your authentication service to handle the sign-in logic
    this.authService.signIn(this.credentials).subscribe({
      next: (user) => {
        console.log('Sign-in successful:', user);
        console.log('User role:', user.role);
        
        if (!user) {
          this.showError('Utilisateur non trouvé.');
          return;
        }
        
        this.sharedService.setUser(user);
        this.isAuthenticated = true;
        this.authService.handleSuccessfulSignIn(user);
        
        if (user.role === "client"){
          console.log('Redirecting to terrains for client');
          this.router.navigate(['/terrains']);
        } else if (user.role === "proprietaireTerrain" || user.role === "admin"){
          console.log('Redirecting to admin for role:', user.role);
          this.router.navigate(['/admin']);
        } else {
          console.log('Unknown role, redirecting to admin:', user.role);
          this.router.navigate(['/admin']);
        }
      },
      error: (error) => {
        console.error('Error signing in:', error);
        this.showError('Erreur de connexion. Vérifiez vos identifiants.');
      }
    });
  }
  showSuccess() {
    this.toastr.success('Le terrain a été ajouté avec succès !');
  }

  showError(message: string) {
    this.toastr.error(message);
  }

  showWarning() {
    this.toastr.warning('This is a warning message.', 'Warning');
  }

  showInfo() {
    this.toastr.info('This is an info message.', 'Info');
  }
}

