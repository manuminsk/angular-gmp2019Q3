import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { Course } from '../../models/course.class';
import { CourseService } from '../../services/course.service';
import { DialogComponent } from 'src/app/modules/shared/components/dialog/dialog.component';
import { Router } from '@angular/router';

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

  constructor(
    readonly courseService: CourseService,
    readonly router: Router,
    readonly dialog: MatDialog,
    readonly ref: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.courses$ = this.courseService.getCourseList();
  }

  public onAddCourse(): void {
    this.router.navigateByUrl('/courses/new');
  }

  public onEditCourse(event: Course): void {
    this.router.navigateByUrl(`/courses/edit/${event.id}`);
  }

  public onDeleteCourse({ id }: Course): void {
    this.openDialog(id);
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

  public openDialog(id): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: {
        title: 'Confirmation needed',
        question: 'Do you really want to delete this course?'
      }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.courses$ = this.courseService.removeCourse(id);
        this.ref.markForCheck();
      }
    });
  }
}
