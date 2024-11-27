import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginServices {
  private isOpen = false;
  private loginVisible: boolean = true;

  getIsOpen() {
    return this.isOpen;
  }
  getLoginV() {
    console.log('get login', this.loginVisible);
    return this.loginVisible;
  }

  setLoginV(newValue: boolean) {
    this.loginVisible = newValue;
    console.log('set login', this.loginVisible);
  }

  setIsOpen(newValue: boolean) {
    this.isOpen = newValue;
  }
}
