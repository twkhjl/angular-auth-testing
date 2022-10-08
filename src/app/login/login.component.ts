import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    name: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    // if (this.storageService.isLoggedIn()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    //   console.log(this.roles);
    // }else{
    //   console.log('not logged in');

    // }
  }

  onSubmit(): void {
    const { name, password } = this.form;

    this.authService.login(name, password).subscribe({
      next: data => {
        console.log(data);

        // this.storageService.saveUser(data);
        // this.isLoginFailed = false;
        // this.isLoggedIn = true;
        // this.roles = this.storageService.getUser().roles;
        // this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
