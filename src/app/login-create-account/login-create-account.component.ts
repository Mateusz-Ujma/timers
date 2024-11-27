import { Component } from '@angular/core';

@Component({
  selector: 'app-login-create-account',
  standalone: true,
  imports: [],
  templateUrl: './login-create-account.component.html',
  styleUrl: './login-create-account.component.css',
})
export class LoginCreateAccountComponent {
  loginVisible: boolean = true;
  cAVisible: boolean = false;
}
