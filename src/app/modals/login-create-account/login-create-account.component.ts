import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginServices } from '../../../services/login.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

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

  @Output() isClose = new EventEmitter<boolean>();

  constructor(private ls: LoginServices, private authS: AuthService) {
    this.loginVisible = ls.getLoginV();
    // console.log(this.loginVisible);
  }
  register() {
    this.authS.register(this.emailCA, this.loginCA, this.passwordCA).subscribe({
      next: () => {},
      error: (err) => (this.errorMessageCA = err.code),
    });
  }
  login() {
    this.authS.login(this.emailLogin, this.passwordLogin).subscribe({
      next: () => {},
      error: (err) => (this.errorMessageLogin = err.code),
    });
  }
  close() {
    this.isClose.emit(false);
  }
}
