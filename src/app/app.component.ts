import { Component, inject, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { TimerPanelComponent } from './timer-panel/timer-panel.component';

import { NavbarComponent } from './navbar/navbar.component';

import { RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  router = inject(Router);
  constructor(private authS: AuthService) {}
  ngOnInit(): void {
    if (this.authS.currentUserSig()) {
      this.router.navigateByUrl('/timers');
    } else {
      this.router.navigateByUrl('');
    }
  }
}
