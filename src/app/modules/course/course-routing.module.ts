import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListComponent } from './components/courses-list/courses-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CourseRoutingModule { }
