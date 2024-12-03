import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { SectominPipe } from '../../sectomin.pipe';
import { TimerServices } from '../../../services/timer.service';

@Pipe({
  name: 'minuteSeconds',
})
export class MinuteSecondsPipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
  }
}

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [SectominPipe],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent {
  @Input() time!: number;
  @Input() name!: string;
  isStart: boolean = false;
  int: any;
  isEnd: boolean = false;

  constructor(private ts: TimerServices) {}

  start() {
    this.isStart = true;
    this.int = setInterval(() => {
      this.time = this.time - 1;
      if (this.time === 0) {
        clearInterval(this.int);
        this.isEnd = true;
      }
    }, 1000);
  }
  pause() {
    this.isStart = false;
    clearInterval(this.int);
  }
  reset() {
    clearInterval(this.int);
    this.isEnd = false;
    this.time = this.ts.getTimerTime(this.name);
  }
  deleteT() {
    this.ts.deleteTimer(this.name);
  }
}
