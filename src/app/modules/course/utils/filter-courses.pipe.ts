import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../models/course.class';

@Pipe({
  name: 'filterCourses'
})
export class FilterCoursesPipe implements PipeTransform {

  public transform(courses: Course[], searchTerm: string): Course[] {
    if (courses.length && searchTerm.length) {
      return courses.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    return courses;
  }

}
