import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiService } from './modules/core/services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title: string = 'angular-gmp2019-Q3';
}
