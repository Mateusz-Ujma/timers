import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginServices } from '../../../services/login.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-create-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-create-account.component.html',
  styleUrl: './login-create-account.component.css',
})
export class LoginCreateAccountComponent {
  @Input() loginVisible: boolean;

  @Output() isClose = new EventEmitter<boolean>();

  constructor(private ls: LoginServices) {
    this.loginVisible = ls.getLoginV();
    // console.log(this.loginVisible);
  }

  close() {
    this.isClose.emit(false);
  }
}
