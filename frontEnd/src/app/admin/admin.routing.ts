import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AdminComponent } from './admin.component';
import { HomeComponent } from '../user/home/home.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    //   redirectTo: '/admin/pages/index',
    component: AdminComponent

  },
  {
    path: 'home',
    //   redirectTo: '/admin/pages/index',
    component: HomeComponent
  }
];

export const routing = RouterModule.forRoot(adminRoutes);
