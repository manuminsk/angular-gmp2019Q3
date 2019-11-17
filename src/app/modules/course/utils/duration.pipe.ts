import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  public transform(duration: number): string {
    if (duration < 60) {
      return `${duration}min`;
    }

    const minutes = duration % 60;
    const hours = (duration - minutes) / 60;
    return `${hours}h ${minutes}min`;
  }

}
