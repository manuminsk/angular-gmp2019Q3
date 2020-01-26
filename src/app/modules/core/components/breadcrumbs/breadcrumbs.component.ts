import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {
  @Input() public courseTitle: string = '';

  public isAuthenticated: boolean;

  constructor(readonly authService: AuthService) {}

  public ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}
