import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Course } from '@course/models/course.class';
import { validateDigits } from '@shared/directives/number-validator.directive';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormComponent implements OnInit {
  @Input() public course: Course;
  @Output() public cancelEvt: EventEmitter<void> = new EventEmitter();
  @Output() public submitEvt: EventEmitter<Course> = new EventEmitter();

  public courseForm: FormGroup;

  public ngOnInit(): void {
    this.courseForm = new FormGroup({
      id: new FormControl(this.course.id),
      name: new FormControl(this.course.name, [Validators.required, Validators.maxLength(50)]),
      thumbnail: new FormControl(this.course.thumbnail),
      date: new FormControl(new DatePipe('en-US').transform(this.course.date, 'yyyy-MM-dd'), Validators.required),
      isTopRated: new FormControl(this.course.isTopRated),
      // TODO: fix validation
      length: new FormControl(this.course.length, [Validators.required, validateDigits()]),
      description: new FormControl(this.course.description, [Validators.required, Validators.maxLength(500)]),
      // TODO: fix validation
      authors: new FormControl(this.course.authors, Validators.required)
    });
  }

  public onCancel(): void {
    this.cancelEvt.emit();
  }

  public onSubmit(): void {
    this.submitEvt.emit(this.courseForm.value);
  }
}
