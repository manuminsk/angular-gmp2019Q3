import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPageComponent } from './not-found-page.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { JsonTranslationLoader } from '@core/models/json-translation-loader.model';

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundPageComponent],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: JsonTranslationLoader }
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
