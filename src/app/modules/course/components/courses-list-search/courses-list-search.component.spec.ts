import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListSearchComponent } from './courses-list-search.component';

describe('CoursesListSearchComponent', () => {
  let component: CoursesListSearchComponent;
  let fixture: ComponentFixture<CoursesListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
