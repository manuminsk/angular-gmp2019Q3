import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { Course } from '../../models/course.class';
import { CourseService } from '../../services/course.service';
import { DialogComponent } from 'src/app/modules/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {
  public courses$: Observable<Course[]>;
  public searchTerm: string = '';
  public noDataMessageText: string = 'No data. Feel free to add new course.';

  constructor(private courseService: CourseService, public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.courses$ = this.courseService.getCourseList();
  }

  public onAddCourse(event: Course): void {
    // TODO: add real logic of adding a course
    this.courses$ = this.courseService.createCourse(event);
  }

  public onEditCourse(event: Course): void {
    // TODO: add real logic of editing a course
    this.courses$ = this.courseService.updateCourse(event);
  }

  public onDeleteCourse({ id }: Course): void {
    this.openDialog((result: boolean) => {
      result && (this.courses$ = this.courseService.removeCourse(id));
    });
  }

  public onLoadMore(event): void {
    console.log('=== LOAD MORE ===', event);
  }

  public onFindEvt(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }

  public onResetEvt(): void {
    this.searchTerm = '';
  }

  public openDialog(cb: Function): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: { title: 'Confirmation needed', question: 'Do you really want to delete this course?'}
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      cb(result);
    });
  }
}
