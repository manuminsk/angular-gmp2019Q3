import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from '@core/components/login-page/login-page.component';
import { NotFoundPageComponent } from '@core/components/not-found-page/not-found-page.component';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'courses',
    loadChildren: () => import('@course/course.module').then(m => m.CourseModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
