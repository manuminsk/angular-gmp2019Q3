import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, Component } from '@angular/core';

import { CoursesListItemComponent } from './courses-list-item.component';
import { ICourse } from '../../models/course.class';
import { DatePipe } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DurationPipe } from '../../utils/duration.pipe';

@Component({
  template: `
    <app-courses-list-item
      [course]='course'
      (editCourseEvt)='onEditCourse($event)'
      (deleteCourseEvt)='onDeleteCourse($event)'
    >
    </app-courses-list-item>
  `
})
class TestHostComponent {
  course: ICourse;
  deleteCourse: ICourse;
  editCourse: ICourse;

  constructor() {
    this.course = {
      id: 'Test_id',
      title: 'Test title',
      thumbnail: '',
      creationDate: '2019-10-30',
      topRated: false,
      duration: 60,
      description: 'Test description'
    };
  }

  onDeleteCourse(deleteCourse: ICourse) {
    this.deleteCourse = deleteCourse;
  }

  onEditCourse(editCourse: ICourse) {
    this.editCourse = editCourse;
  }
}

describe('TestHostComponent: CoursesListItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListItemComponent, TestHostComponent, DurationPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise \'deleteCourseEvt\'', () => {
    const deleteButton: DebugElement = debugElement.query(
      By.css('.course-item-delete-btn')
    );
    deleteButton.triggerEventHandler('click', null);

    expect(component.deleteCourse).toEqual(component.course);
  });

  it('should raise \'editCourseEvt\'', () => {
    const editButton: DebugElement = debugElement.query(
      By.css('.course-item-edit-btn')
    );
    editButton.triggerEventHandler('click', null);

    expect(component.editCourse).toEqual(component.course);
  });
});

describe('CoursesListItemComponent', () => {
  let component: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;
  let course: ICourse;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListItemComponent, DurationPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    course = {
      id: 'Test_id',
      title: 'Test title',
      thumbnail: '',
      creationDate: '2019-10-30',
      topRated: false,
      duration: 60,
      description: 'Test description'
    };
    fixture = TestBed.createComponent(CoursesListItemComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render proper title', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const title: Element = nativeElement.querySelector('.course-item-title');

    expect(title.textContent.trim()).toBe(component.course.title.toUpperCase());
  });

  it('should render proper sub-title', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const subtitle: Element = nativeElement.querySelector(
      '.course-item-subtitle'
    );

    expect(subtitle.textContent.trim()).toBe(
      `${new DatePipe('en').transform(
        component.course.creationDate,
        'dd.MM.yyyy'
      )} | ${new DurationPipe().transform(component.course.duration)}`
    );
  });

  it('should render proper preview image', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const image: Element = nativeElement.querySelector(
      '.course-item-thumbnail'
    );

    expect(image.getAttribute('src')).toBe(
      `${component.course.thumbnail}?index=${component.course.id}`
    );
  });

  it('should render proper description', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const description: Element = nativeElement.querySelector(
      '.course-item-description'
    );

    expect(description.textContent.trim()).toBe(component.course.description);
  });

  it('should render edit button', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const btn: Element = nativeElement.querySelector('.course-item-edit-btn');

    expect(btn).toBeTruthy();
  });

  it('should call onEdit method', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const btn: DebugElement = debugElement.query(
      By.css('.course-item-edit-btn')
    );

    spyOn(component, 'onEdit');
    btn.triggerEventHandler('click', null);

    expect(component.onEdit).toHaveBeenCalled();
  });

  it('should render delete button', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const btn: Element = nativeElement.querySelector('.course-item-delete-btn');

    expect(btn).toBeTruthy();
  });

  it('should call onDeletet method', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const btn: DebugElement = debugElement.query(
      By.css('.course-item-delete-btn')
    );

    spyOn(component, 'onDelete');
    btn.triggerEventHandler('click', null);

    expect(component.onDelete).toHaveBeenCalled();
  });
});
