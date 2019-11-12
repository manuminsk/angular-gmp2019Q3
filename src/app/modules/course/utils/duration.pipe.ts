import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(duration: number, args?: any): any {
    if (duration < 60) {
      return `${duration}min`;
    } else {
      const minutes = duration % 60;
      const hours = (duration - minutes) / 60;
      return `${hours}h ${minutes}min`;
    }
  }

}
