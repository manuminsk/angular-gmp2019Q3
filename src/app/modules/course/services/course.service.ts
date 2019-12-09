import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Course } from '../models/course.class';
import { environment } from 'src/environments/environment';
import { APIConst } from '../../shared/constants/api-const.class';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private readonly http: HttpClient) {}

  public getCourse(id: string): Observable<Course> {
    return this.http.get<Course>(`${environment.apiPrefix}${APIConst.endpoints.courses.root}/${id}`);
  }

  public getCourseList(start: number = 0, count: number = 10, searchTerm: string = ''): Observable<Course[]> {
    return this.http.get<Course[]>(
      `${environment.apiPrefix}${
        APIConst.endpoints.courses.root
      }?start=${start}&count=${count}&textFragment=${searchTerm}&sort=date`
    );
  }

  public createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${environment.apiPrefix}${APIConst.endpoints.courses.root}`, course);
  }

  public updateCourse(course: Course): Observable<Course> {
    return this.http.patch<Course>(`${environment.apiPrefix}${APIConst.endpoints.courses.root}/${course.id}`, course);
  }

  public removeCourse(id: string): Observable<unknown> {
    return this.http.delete(`${environment.apiPrefix}${APIConst.endpoints.courses.root}/${id}`);
  }
}
