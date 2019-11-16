import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {
  public isAuthenticated: boolean;

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}
