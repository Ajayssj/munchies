import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    //   redirectTo: '/admin/pages/index',
    component: AdminComponent,

  }
];

export const routing = RouterModule.forRoot(adminRoutes);
