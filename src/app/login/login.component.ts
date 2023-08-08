import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent implements OnInit {

  message: string = 'Vous etes deconnecter'
  name: string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) {
    
  }
  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage() {
    if (this.authService.isLoggedIn) {
      this.message = 'Vous etes connected';
    } else {
      this.message = 'Identifiant ou mot de passe incorrect';
    }
  }

  login() {
    this.authService.login(this.name, this.password).
      subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) { 
          this.router.navigate(['/pokemons']);
        } else {
          this.password = '';
          this.router.navigate(['/login']);
        }
        
    })
  }

  logout() {
    this.authService.logout();
    this.message = 'vous etes deconnecter';
  }

}
