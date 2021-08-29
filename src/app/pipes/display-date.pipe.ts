import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayDate'
})
export class DisplayDatePipe implements PipeTransform {

  transform(value: string): string {
    const date: Date = new Date(value);
    if (!date) {
      return value;
    }

    const day: number = date.getDate();
    const month: number = date.getMonth() + 1;
    const year: number = date.getFullYear();
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return value;
    }

    return `${ day }-${ month }-${ year }`;
  }

}
