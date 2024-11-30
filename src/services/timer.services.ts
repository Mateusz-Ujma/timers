import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TimerServices {
  isShowAddTimer = false;
  timer: { time: number; name: string }[] = [
    { time: 2323, name: 'Free Time' },
    { time: 2323, name: 'Free Time' },
    { time: 2323, name: 'Free Time' },
    { time: 2323, name: 'Play Games' },
    { time: 222322, name: 'tst' },
    { time: 232323, name: 'Play Games' },
    { time: 232320, name: 'Play Games' },
    { time: 232323, name: 'Play Games' },
    { time: 232323, name: 'Play Games' },
    { time: 232323, name: 'Play Games' },
    { time: 232323, name: 'Play Games' },
    { time: 232323, name: 'Play Games' },
    { time: 232323, name: 'Play Games' },
    { time: 323, name: 'Play Games' },
  ];
  changeShow(value: boolean) {
    this.isShowAddTimer = value;
  }
  getShow(): boolean {
    return this.isShowAddTimer;
  }
  getTimer() {
    return this.timer;
  }
  getTimerTime(name: string): number {
    const temp = this.timer.filter((e) => e.name === name);
    return temp[0].time;
  }
  addTimer(name: string, seconds: number) {
    this.timer.push({ time: seconds, name: name });
  }
  setTimeInTimer(name: string, newTime: number) {
    const temp = this.timer.filter((e) => e.name === name);
    temp[0].time = newTime;
  }
  deleteTimer(name: string) {
    const temp = this.timer.filter((e) => e.name === name);
    const ind = this.timer.indexOf(temp[0]);
    this.timer.splice(ind, 1);
  }
}
