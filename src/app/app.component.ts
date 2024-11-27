import {
  Component,
  OnChanges,
  Pipe,
  PipeTransform,
  SimpleChanges,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimerPanelComponent } from './timer-panel/timer-panel.component';
import { AddNewTimerComponent } from './modals/add-new-timer/add-new-timer.component';
import { CommonModule } from '@angular/common';
import { TimerServices } from '../services/timer.services';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TimerPanelComponent,
    AddNewTimerComponent,

    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
