import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimerServices } from '../../services/timer.services';
import { AddNewTimerComponent } from '../modals/add-new-timer/add-new-timer.component';
import { CommonModule } from '@angular/common';
import { LoginCreateAccountComponent } from '../modals/login-create-account/login-create-account.component';
import { LoginServices } from '../../services/login.services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AddNewTimerComponent, CommonModule, LoginCreateAccountComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  visible: boolean = this.ls.getIsOpen();
  isShowAddTimer = this.ts.getShow();

  loginVisible: boolean = this.ls.getLoginV();
  constructor(private ts: TimerServices, private ls: LoginServices) {
    this.isShowAddTimer = this.ts.getShow();
  }
  ngOnInit(): void {}

  changeShow(value: boolean) {
    this.ts.changeShow(value);
    this.isShowAddTimer = this.ts.getShow();
  }
  openWindow(data: string) {
    this.loginVisible = this.ls.getLoginV();
    if (data === 'login') {
      this.ls.setLoginV(true);
    } else {
      this.ls.setLoginV(false);
    }
    this.visible = true;
  }
  close(value: boolean) {
    this.ls.setIsOpen(value);
    this.visible = this.ls.getIsOpen();
  }
}
