import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { CourseRoutingModule } from './course-routing.module';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesListItemComponent } from './components/courses-list-item/courses-list-item.component';
import { CoursesListSearchComponent } from './components/courses-list-search/courses-list-search.component';
import { CourseBorderDirective } from './utils/course-border.directive';
import { DurationPipe } from './utils/duration.pipe';
import { OrderByPipe } from './utils/order-by.pipe';
import { FilterCoursesPipe } from './utils/filter-courses.pipe';

@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesListSearchComponent,
    CourseBorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterCoursesPipe
  ],
  imports: [
    SharedModule,
    CourseRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class CourseModule {}
