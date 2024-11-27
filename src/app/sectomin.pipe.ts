import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sectomin',
  standalone: true,
})
export class SectominPipe implements PipeTransform {
  transform(value: number): string {
    const dateObj = new Date(value * 1000);
    const hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getSeconds();
    const timeString =
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0');
    return timeString;
  }
}
