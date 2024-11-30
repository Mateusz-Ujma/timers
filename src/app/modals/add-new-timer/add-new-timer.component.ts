import { Component, EventEmitter, Output } from '@angular/core';
import { TimerServices } from '../../../services/timer.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-timer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-new-timer.component.html',
  styleUrl: './add-new-timer.component.css',
})
export class AddNewTimerComponent {
  hour: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  name: string = '';
  isWarn: boolean = false;
  isNotTName: boolean = false;
  temp2!: boolean;

  @Output() isShow = new EventEmitter<boolean>();
  @Output() timeSum = new EventEmitter<number>();
  isShowAddTimer!: boolean;

  constructor(private ts: TimerServices) {
    this.isShowAddTimer = ts.getShow();
  }

  closeWindow() {
    this.isShow.emit(false);
  }
  addTimer() {
    let temp: number = this.hour * 3600 + this.minutes * 60 + this.seconds;
    console.log(this.name);
    this.temp2 = this.hour === 0 && this.minutes === 0 && this.seconds === 0;

    if (
      this.hour > 99 ||
      this.minutes > 99 ||
      this.seconds > 99 ||
      this.temp2
    ) {
      this.isWarn = true;
      this.isNotTName = false;
    } else {
      if (this.name === '') {
        this.isNotTName = true;
        this.isWarn = false;
        return;
      } else {
        this.isNotTName = false;
        this.ts.addTimer(this.name, temp);
        this.isShow.emit(false);
        return;
      }
      this.isWarn = false;
      this.ts.addTimer(this.name, temp);
      this.isShow.emit(false);
    }
  }
}
