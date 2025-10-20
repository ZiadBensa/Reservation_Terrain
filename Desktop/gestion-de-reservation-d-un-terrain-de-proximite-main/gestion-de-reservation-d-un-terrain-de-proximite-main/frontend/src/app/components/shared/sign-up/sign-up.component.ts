import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {User} from "../../../models/user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ClientService} from "../../../services/client/client.service";
import {NgClass} from "@angular/common";
import {ProprietaireTerrain} from "../../../models/proprietaire-terrain";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  userType: string = 'regular';

  user: User = {} as User;
 /* user: User | ProprietaireTerrain = {
    nom: 'mohamed',
    prenom: '',
    email: '',
    password: '',
    telephone: '',
    adresse: '',
    cin: '',
  };*/
  constructor(private clientService: ClientService) {}

  /*onSubmit() {


    this.clientService.saveClient(this.user).subscribe(
      (response) => {
        console.log('Client saved successfully:', response);
        // Handle successful response
      },
      (error) => {
        console.error('Error saving client:', error);
        // Handle error
      }
    );
  }*/

  onSubmit() {
    // Set the role based on user type selection
    if (this.userType === 'regular') {
      this.user.role = 'client';
      console.log('Regular Client Signup:', this.user);
    } else if (this.userType === 'owner') {
      this.user.role = 'proprietaireTerrain';
      console.log('Owner Signup:', this.user);
    }

    // Call the unified save endpoint
    this.clientService.saveClient(this.user).subscribe(
      (response) => {
        console.log('User saved successfully:', response);
        // Handle successful response
      },
      (error) => {
        console.error('Error saving user:', error);
        // Handle error
      }
    );
  }
}
