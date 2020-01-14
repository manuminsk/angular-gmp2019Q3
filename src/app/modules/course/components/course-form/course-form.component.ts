import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { Author, Course } from '@course/models/course.class';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormComponent implements OnInit {
  @Input() public course: Course;
  @Output() public cancelEvt: EventEmitter<void> = new EventEmitter();
  @Output() public submitEvt: EventEmitter<Course> = new EventEmitter();

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  public courseForm: FormGroup;

  public visible: boolean = true;
  public selectable: boolean = true;
  public removable: boolean = true;
  public addOnBlur: boolean = true;

  public ngOnInit(): void {
    this.courseForm = new FormGroup({
      id: new FormControl(this.course.id),
      name: new FormControl(this.course.name, [Validators.required, Validators.maxLength(50)]),
      thumbnail: new FormControl(this.course.thumbnail),
      date: new FormControl(new DatePipe('en-US').transform(this.course.date, 'yyyy-MM-dd'), Validators.required),
      isTopRated: new FormControl(this.course.isTopRated),
      // TODO: fix validation
      length: new FormControl(this.course.length, Validators.required),
      description: new FormControl(this.course.description, [Validators.required, Validators.maxLength(500)]),
      // TODO: fix validation
      authors: new FormControl(this.course.authors, Validators.required)
    });
  }

  public add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.course.authors.push({ name: value.trim() });
    }

    if (input) {
      input.value = '';
    }
  }

  public remove(author: Author): void {
    const index = this.course.authors.indexOf(author);

    if (index >= 0) {
      this.course.authors.splice(index, 1);
    }
  }

  public onCancel(): void {
    this.cancelEvt.emit();
  }

  public onSubmit(): void {
    this.submitEvt.emit(this.courseForm.value);
  }
}
