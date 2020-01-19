import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

import { Author } from '@course/models/course.class';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorComponent),
      multi: true
    }
  ]
})
export class AuthorComponent implements ControlValueAccessor, Validator {
  public authors: Author[];

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  public visible: boolean = true;
  public selectable: boolean = true;
  public removable: boolean = true;
  public addOnBlur: boolean = true;

  public onChange = (authors: Author[]) => {};

  public onTouched = () => {};

  public get value(): Author[] {
    return this.authors;
  }

  public validate({ value }: FormControl) {
    const isNotValid = !(this.authors && this.authors.length);

    return (
      isNotValid && {
        invalid: true
      }
    );
  }

  public registerOnChange(fn: (authors: Author[]) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public writeValue(authors: Author[]): void {
    this.authors = authors;

    this.onChange(this.value);
  }

  public add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.authors.push({ name: value.trim() });
    }

    if (input) {
      input.value = '';
    }

    this.onChange(this.value);
  }

  public remove(author: Author): void {
    const index = this.authors.indexOf(author);

    if (index >= 0) {
      this.authors.splice(index, 1);
    }

    this.onChange(this.value);
  }
}
