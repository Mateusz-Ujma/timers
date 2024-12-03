import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginServices {
  private isOpen = false;
  private loginVisible: boolean = true;

  getIsOpen() {
    return this.isOpen;
  }
  getLoginV() {
    return this.loginVisible;
  }

  setLoginV(newValue: boolean) {
    this.loginVisible = newValue;
  }

  setIsOpen(newValue: boolean) {
    this.isOpen = newValue;
  }
}
