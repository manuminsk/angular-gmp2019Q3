import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from '@core/components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from '@core/components/footer/footer.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { LoginPageComponent } from '@core/components/login-page/login-page.component';
import { LogoComponent } from '@core/components/logo/logo.component';
import { NotFoundPageComponent } from '@core/components/not-found-page/not-found-page.component';
import { SharedModule } from '@shared/shared.module';
import { LoaderComponent } from '@core/components/loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    LoaderComponent
  ],
  imports: [SharedModule, MatToolbarModule, RouterModule],
  exports: [HeaderComponent, BreadcrumbsComponent, FooterComponent, LoginPageComponent, NotFoundPageComponent]
})
export class CoreModule {}
