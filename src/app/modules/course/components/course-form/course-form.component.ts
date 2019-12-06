import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { Author, Course} from '../../models/course.class';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormComponent {
  @Input() public course: Course;
  @Output() public cancelEvt: EventEmitter<void> = new EventEmitter();
  @Output() public submitEvt: EventEmitter<Course> = new EventEmitter();

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  public visible: boolean = true;
  public selectable: boolean = true;
  public removable: boolean = true;
  public addOnBlur: boolean = true;

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
    this.submitEvt.emit(this.course);
  }
}
