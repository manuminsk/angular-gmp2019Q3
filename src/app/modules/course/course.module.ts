import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { CourseRoutingModule } from './course-routing.module';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesListItemComponent } from './components/courses-list-item/courses-list-item.component';
import { CoursesListSearchComponent } from './components/courses-list-search/courses-list-search.component';
import { CourseBorderDirective } from './utils/course-border.directive';
import { DurationPipe } from './utils/duration.pipe';
import { CourseAddPageComponent } from './components/course-add-page/course-add-page.component';
import { CourseEditPageComponent } from './components/course-edit-page/course-edit-page.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesListSearchComponent,
    CourseBorderDirective,
    DurationPipe,
    CourseAddPageComponent,
    CourseEditPageComponent,
    CourseFormComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    CourseRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class CourseModule {}
