import { Component, OnInit } from '@angular/core';
import { TimerComponent } from './timer/timer.component';
import { TimerServices } from '../../services/timer.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer-panel',
  standalone: true,
  imports: [TimerComponent, CommonModule],
  templateUrl: './timer-panel.component.html',
  styleUrl: './timer-panel.component.css',
})
export class TimerPanelComponent implements OnInit {
  timers!: { time: number; name: string }[];

  constructor(private ts: TimerServices) {}
  ngOnInit(): void {
    this.timers = this.ts.getTimer();
  }
}
