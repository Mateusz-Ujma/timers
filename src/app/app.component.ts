import { Component } from '@angular/core';

import { TimerPanelComponent } from './timer-panel/timer-panel.component';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginServices } from '../services/login.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimerPanelComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private ls: LoginServices) {}
}
