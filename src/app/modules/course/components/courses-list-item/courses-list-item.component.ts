import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

import { ICourse } from '../../models/course.class';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListItemComponent {
  @Input() public course: ICourse;

  @Output() public deleteCourseEvt: EventEmitter<ICourse> = new EventEmitter();
  @Output() public editCourseEvt: EventEmitter<ICourse> = new EventEmitter();

  public mockImgSrc: string = 'https://placeimg.com/350/200/any?index=';

  public onEdit(): void {
    this.editCourseEvt.emit(this.course);
  }

  public onDelete(): void {
    this.deleteCourseEvt.emit(this.course);
  }
}
