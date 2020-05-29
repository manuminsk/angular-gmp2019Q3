import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSpinner } from '@angular/material/progress-spinner';

import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { CourseRoutingModule } from '@course/course-routing.module';

import { CoursesListComponent } from '@course/components/courses-list/courses-list.component';
import { CoursesListItemComponent } from '@course/components/courses-list-item/courses-list-item.component';
import { CoursesListSearchComponent } from '@course/components/courses-list-search/courses-list-search.component';
import { CourseBorderDirective } from '@course/utils/course-border.directive';
import { DurationPipe } from '@course/utils/duration.pipe';
import { CourseAddPageComponent } from '@course/components/course-add-page/course-add-page.component';
import { CourseEditPageComponent } from '@course/components/course-edit-page/course-edit-page.component';
import { CourseFormComponent } from '@course/components/course-form/course-form.component';
import { AuthorComponent } from './components/author/author.component';

@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesListSearchComponent,
    CourseBorderDirective,
    DurationPipe,
    CourseAddPageComponent,
    CourseEditPageComponent,
    CourseFormComponent,
    AuthorComponent
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
