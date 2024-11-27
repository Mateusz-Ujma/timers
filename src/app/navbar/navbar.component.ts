import { Component } from '@angular/core';
import { TimerServices } from '../../services/timer.services';
import { AddNewTimerComponent } from '../modals/add-new-timer/add-new-timer.component';
import { CommonModule } from '@angular/common';
import { LoginCreateAccountComponent } from '../login-create-account/login-create-account.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AddNewTimerComponent, CommonModule, LoginCreateAccountComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isShowAddTimer = this.ts.getShow();

  constructor(private ts: TimerServices) {
    this.isShowAddTimer = this.ts.getShow();
  }

  changeShow(value: boolean) {
    this.ts.changeShow(value);
    this.isShowAddTimer = this.ts.getShow();
  }
}
