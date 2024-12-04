import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { TimerServices } from '../../services/timer.service';
import { AddNewTimerComponent } from '../modals/add-new-timer/add-new-timer.component';
import { CommonModule } from '@angular/common';
import { LoginCreateAccountComponent } from '../modals/login-create-account/login-create-account.component';
import { LoginServices } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
  router = inject(Router);
  loginVisible: boolean = this.ls.getLoginV();

  constructor(
    private ts: TimerServices,
    private ls: LoginServices,
    public authS: AuthService
  ) {
    this.isShowAddTimer = this.ts.getShow();
  }
  ngOnInit(): void {
    this.authS.user$.subscribe((user: any) => {
      if (user) {
        this.authS.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
        this.router.navigateByUrl('/timers');
        console.log('timers');
      } else {
        this.authS.currentUserSig.set(null);
        this.router.navigateByUrl('');
        console.log('home');
      }
      console.log(this.authS.currentUserSig());
    });
  }

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
  logout() {
    this.authS.logout();
    this.router.navigateByUrl('');
  }
  close(value: boolean) {
    this.ls.setIsOpen(value);
    this.visible = this.ls.getIsOpen();
  }
}
