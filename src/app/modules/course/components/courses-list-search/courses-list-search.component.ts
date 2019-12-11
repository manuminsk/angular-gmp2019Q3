import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-courses-list-search',
  templateUrl: './courses-list-search.component.html',
  styleUrls: ['./courses-list-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListSearchComponent {
  @Output() findEvt: EventEmitter<string> = new EventEmitter<string>();
  @Output() resetEvt: EventEmitter<void> = new EventEmitter<void>();

  public searchTerm: string = '';

  public onSubmit(): void {
    this.findEvt.emit(this.searchTerm);
  }
}
