import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSpinner } from '@angular/material';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LogoComponent } from './components/logo/logo.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    LoginPageComponent,
    NotFoundPageComponent
  ],
  imports: [SharedModule, MatToolbarModule, RouterModule],
  exports: [HeaderComponent, BreadcrumbsComponent, FooterComponent, LoginPageComponent, NotFoundPageComponent]
})
export class CoreModule {}
