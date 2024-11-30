import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sectomin',
  standalone: true,
})
export class SectominPipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 3600);

    const minutes = Math.floor((value - hours * 3600) / 60);
    const seconds = value - hours * 3600 - minutes * 60;
    const timeString =
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0');

    return timeString;
  }
}
