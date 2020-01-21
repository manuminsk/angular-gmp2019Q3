import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CoursesListSearchComponent } from './courses-list-search.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { JsonTranslationLoader } from '@core/models/json-translation-loader.model';

describe('CoursesListSearchComponent', () => {
  let component: CoursesListSearchComponent;
  let fixture: ComponentFixture<CoursesListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListSearchComponent],
      imports: [
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: JsonTranslationLoader }
        })
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit search form', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const input: DebugElement = debugElement.query(By.css('input'));

    spyOn(component, 'onChangeInput');
    input.triggerEventHandler('keyup', null);

    expect(component.onChangeInput).toHaveBeenCalled();
  });
});
