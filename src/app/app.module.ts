import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSpinner } from '@angular/material';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AuthInterceptor } from './modules/core/services/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, CoreModule, HttpClientModule],
  entryComponents: [MatSpinner],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
