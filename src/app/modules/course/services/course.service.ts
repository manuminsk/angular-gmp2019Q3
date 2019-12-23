import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Course } from '../models/course.class';
import { environment } from 'src/environments/environment';
import { APIConst } from '../../shared/constants/api-const.class';
import { IEndpoint } from '../../shared/models/endpoint.interface';
import { UiService } from '../../core/services/ui.service';
import { ICourseQuery } from '../models/course-query.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private endpoint: IEndpoint;
  private host: string;

  constructor(private readonly http: HttpClient, private readonly ui: UiService) {
    this.endpoint = APIConst.getEndpoint('courses');
    this.host = `${environment.apiUrl}${this.endpoint.root}`;
  }

  public getCourse(id: string): Observable<Course> {
    this.ui.spin$.next(true);
    return this.http.get<Course>(`${this.host}/${id}`).pipe(tap(() => this.ui.spin$.next()));
  }

  public getCourseList({ start = 0, count = 10, searchTerm = '' }: ICourseQuery): Observable<Course[]> {
    this.ui.spin$.next(true);
    return this.http
      .get<Course[]>(`${this.host}?start=${start}&count=${count}&textFragment=${searchTerm}&sort=date`)
      .pipe(tap(() => this.ui.spin$.next()));
  }

  public createCourse(course: Course): Observable<Course> {
    this.ui.spin$.next(true);
    return this.http.post<Course>(`${this.host}`, course).pipe(tap(() => this.ui.spin$.next()));
  }

  public updateCourse(course: Course): Observable<Course> {
    this.ui.spin$.next(true);
    return this.http.patch<Course>(`${this.host}/${course.id}`, course).pipe(tap(() => this.ui.spin$.next()));
  }

  public removeCourse(id: string): Observable<unknown> {
    this.ui.spin$.next(true);
    return this.http.delete(`${this.host}/${id}`).pipe(tap(() => this.ui.spin$.next()));
  }
}
