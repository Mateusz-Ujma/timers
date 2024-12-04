import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { LoginServices } from '../../../services/login.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-login-create-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-create-account.component.html',
  styleUrl: './login-create-account.component.css',
})
export class LoginCreateAccountComponent {
  @Input() loginVisible: boolean;
  emailLogin: string = '';
  passwordLogin: string = '';
  emailCA: string = '';
  loginCA: string = '';
  passwordCA: string = '';
  repPasswordCA: string = '';
  errorMessageCA: string | null = null;
  errorMessageLogin: string | null = null;
  router = inject(Router);

  @Output() isClose = new EventEmitter<boolean>();

  constructor(private ls: LoginServices, private authS: AuthService) {
    this.loginVisible = ls.getLoginV();
    // console.log(this.loginVisible);
  }
  register() {
    if (this.loginCA) {
      this.authS
        .register(this.emailCA, this.loginCA, this.passwordCA)
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/timers');
            this.close();
          },
          error: (err) => (this.errorMessageCA = err.code),
        });
    } else {
      this.errorMessageCA = 'Enter Login';
    }
  }
  login() {
    this.authS.login(this.emailLogin, this.passwordLogin).subscribe({
      next: () => {
        this.router.navigateByUrl('/timers');
        this.close();
      },
      error: (err) => (this.errorMessageLogin = err.code),
    });
  }
  close() {
    this.isClose.emit(false);
  }
}
