import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';

import { CoursesListComponent } from './courses-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { JsonTranslationLoader } from '@core/models/json-translation-loader.model';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  const initialState = {
    courses: {
      list: []
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListComponent],
      imports: [
        MatDialogModule,
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: JsonTranslationLoader }
        })
      ],
      providers: [provideMockStore({ initialState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.courses = [null, null];
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
