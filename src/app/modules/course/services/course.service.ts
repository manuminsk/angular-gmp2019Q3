import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Course, Author } from '@course/models/course.class';
import { environment } from '@root/environments/environment';
import { APIConst } from '@shared/constants/api-const.class';
import { IEndpoint } from '@shared/models/endpoint.interface';
import { UiService } from '@core/services/ui.service';
import { ICourseQuery } from '@course/models/course-query.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseEndpoint: IEndpoint;
  private authorEndpoint: IEndpoint;
  private courseHost: string;
  private authorHost: string;

  constructor(private readonly http: HttpClient, private readonly ui: UiService) {
    this.courseEndpoint = APIConst.getEndpoint('courses');
    this.authorEndpoint = APIConst.getEndpoint('authors');
    this.courseHost = `${environment.apiUrl}${this.courseEndpoint.root}`;
    this.authorHost = `${environment.apiUrl}${this.authorEndpoint.root}`;
  }

  public getCourse(id: string): Observable<Course> {
    this.ui.spin$.next(true);
    return this.http.get<Course>(`${this.courseHost}/${id}`).pipe(tap(() => this.ui.spin$.next()));
  }

  public getCourseList({ start = 0, count = 10, searchTerm = '' }: ICourseQuery): Observable<Course[]> {
    this.ui.spin$.next(true);
    return this.http
      .get<Course[]>(`${this.courseHost}?start=${start}&count=${count}&textFragment=${searchTerm}&sort=date`)
      .pipe(tap(() => this.ui.spin$.next()));
  }

  public getAuthorsList(): Observable<Author[]> {
    this.ui.spin$.next(true);
    return this.http.get<Author[]>(this.authorHost).pipe(tap(() => this.ui.spin$.next()));
  }

  public createCourse(course: Course): Observable<Course> {
    this.ui.spin$.next(true);
    return this.http.post<Course>(`${this.courseHost}`, course).pipe(tap(() => this.ui.spin$.next()));
  }

  public updateCourse(course: Course): Observable<Course> {
    this.ui.spin$.next(true);
    return this.http.patch<Course>(`${this.courseHost}/${course.id}`, course).pipe(tap(() => this.ui.spin$.next()));
  }

  public removeCourse(id: string): Observable<unknown> {
    this.ui.spin$.next(true);
    return this.http.delete(`${this.courseHost}/${id}`).pipe(tap(() => this.ui.spin$.next()));
  }
}
