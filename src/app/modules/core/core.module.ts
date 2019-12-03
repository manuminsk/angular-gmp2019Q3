import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

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
