import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { CoursesListComponent } from './courses-list.component';
import { By } from '@angular/platform-browser';
import { OrderByPipe } from '../../utils/order-by.pipe';
import { FilterCoursesPipe } from '../../utils/filter-courses.pipe';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent, OrderByPipe, FilterCoursesPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render search bar', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const coursesNodes: NodeListOf<Element> = nativeElement.querySelectorAll('app-courses-list-search');

    expect(coursesNodes.length).toBeTruthy();
  });

  it('should call loadMore method', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const btn: DebugElement = debugElement.query(By.css('button.load-more-btn'));

    spyOn(component, 'onLoadMore');
    btn.triggerEventHandler('click', null);

    expect(component.onLoadMore).toHaveBeenCalled();
  });

  it('should call addCourse method', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const btn: DebugElement = debugElement.query(By.css('button.add-course-btn'));

    spyOn(component, 'onAddCourse');
    btn.triggerEventHandler('click', null);

    expect(component.onAddCourse).toHaveBeenCalled();
  });
});
