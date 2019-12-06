import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v1 } from 'uuid';

import { Course } from '../models/course.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private mockCourseList: Course[] = [];

  constructor(private readonly router: Router) {
    for (let i = 0; i < 10; i++) {
      this.mockCourseList.push(
        new Course({
          id: v1(),
          title: `Video Course ${i + 1}`,
          thumbnail: '',
          creationDate: `2019-11-${Math.floor(Math.random() * 20)}`,
          topRated: i % 3 === 0,
          duration: Math.round(Math.random() * i * 20),
          description:
            // tslint:disable-next-line:max-line-length
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        })
      );
    }
  }

  public getCourse(id: string): Observable<Course> {
    return of(this.findCourse(id));
  }

  public getCourseList(): Observable<Course[]> {
    return of(this.mockCourseList);
  }

  public createCourse(course: Course): void {
    this.mockCourseList.push({...course, id: v1()});

    this.router.navigateByUrl('courses');
  }

  public updateCourse(course: Course): void {
    const item: Course = this.findCourse(course.id);
    Object.assign(item, course);

    this.router.navigateByUrl('courses');
  }

  public removeCourse(id: string): Observable<Course[]> {
    this.mockCourseList = this.mockCourseList.filter(course => course.id !== id);

    return of(this.mockCourseList);
  }

  private findCourse(id: string): Course {
    return this.mockCourseList.find(course => course.id === id);
  }
}
