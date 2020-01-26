import { ChangeDetectionStrategy, Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-courses-list-search',
  templateUrl: './courses-list-search.component.html',
  styleUrls: ['./courses-list-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListSearchComponent implements OnInit {
  public searchTextInput: FormControl;

  @Output() findEvt: EventEmitter<string> = new EventEmitter<string>();
  @Output() resetEvt: EventEmitter<void> = new EventEmitter<void>();

  public ngOnInit(): void {
    this.searchTextInput = new FormControl();
  }

  public onChangeInput(): void {
    this.findEvt.emit(this.searchTextInput.value);
  }
}
