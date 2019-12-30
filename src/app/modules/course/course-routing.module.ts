import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListComponent } from '@course/components/courses-list/courses-list.component';
import { CourseAddPageComponent } from '@course/components/course-add-page/course-add-page.component';
import { CourseEditPageComponent } from '@course/components/course-edit-page/course-edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent
  },
  {
    path: 'new',
    component: CourseAddPageComponent
  },
  {
    path: 'edit/:id',
    component: CourseEditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule {}
