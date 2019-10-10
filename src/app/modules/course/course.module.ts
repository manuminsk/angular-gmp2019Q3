import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesListItemComponent } from './components/courses-list-item/courses-list-item.component';
import { CoursesListSearchComponent } from './components/courses-list-search/courses-list-search.component';



@NgModule({
  declarations: [CoursesListComponent, CoursesListItemComponent, CoursesListSearchComponent],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }
