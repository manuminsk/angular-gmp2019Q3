import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddPageComponent } from './course-add-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { JsonTranslationLoader } from '@core/models/json-translation-loader.model';

describe('CourseAddPageComponent', () => {
  let component: CourseAddPageComponent;
  let fixture: ComponentFixture<CourseAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseAddPageComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        OverlayModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: JsonTranslationLoader }
        })
      ],
      providers: [Location, provideMockStore({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
