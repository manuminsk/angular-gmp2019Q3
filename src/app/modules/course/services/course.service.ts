import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { v1 } from 'uuid';

import { Course } from '../models/course.class';
import { environment } from 'src/environments/environment';
import { APIConst } from '../../shared/constants/api-const.class';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private mockCourseList: Course[] = [];

  constructor(private readonly router: Router, private readonly http: HttpClient) {}

  public getCourse(id: string): Observable<Course> {
    return of(this.findCourse(id));
  }

  public getCourseList(start: number = 0, count: number = 10): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.apiPrefix}${APIConst.endpoints.courses.root}?start=${start}&count=${count}`);
  }

  public createCourse(course: Course): void {
    this.mockCourseList.push({ ...course, id: v1() });

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
