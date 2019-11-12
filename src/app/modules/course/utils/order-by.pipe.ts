import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../models/course.class';

export enum SORTING {
  ASC,
  DESC,
}

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  // Implement additional conditions to exclude possible errors
  transform(courses: ICourse[], sorting: SORTING = SORTING.ASC, field: string = 'creationDate', ...args: any[]): any {
    if (!courses) {
      return null;
    }

    const multiplier = sorting === SORTING.ASC ? 1 : -1;

    return courses.sort((current, next) => {
      const itemDate = Date.parse(current[field]);
      const nextDate = Date.parse(next[field]);

      return (itemDate - nextDate) * multiplier;
    });
  }

}
