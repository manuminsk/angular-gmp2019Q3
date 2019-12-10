import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Course } from '../models/course.class';
import { environment } from 'src/environments/environment';
import { APIConst } from '../../shared/constants/api-const.class';
import { IEndpoint } from '../../shared/models/endpoint.inteface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private endpoint: IEndpoint;
  private host: string;

  constructor(private readonly http: HttpClient) {
    this.endpoint = APIConst.getEndpoint('courses');
    this.host = `${environment.apiPrefix}${this.endpoint}`;
  }

  public getCourse(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.host}/${id}`);
  }

  public getCourseList(start: number = 0, count: number = 10, searchTerm: string = ''): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.host}?start=${start}&count=${count}&textFragment=${searchTerm}&sort=date`);
  }

  public createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.host}`, course);
  }

  public updateCourse(course: Course): Observable<Course> {
    return this.http.patch<Course>(`${this.host}/${course.id}`, course);
  }

  public removeCourse(id: string): Observable<unknown> {
    return this.http.delete(`${this.host}/${id}`);
  }
}
