import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: StatisticsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
