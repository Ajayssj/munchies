import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from '../admin.component';
import { AuthGuard } from './../auth.guard';

export const childRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            // {
            //     path: 'login',
            //     component: LoginComponent,
            // },
            {
                path: 'pages',
                component: PagesComponent,
                // canActivate: [AuthGuard],
                children: [
                    { path: '', redirectTo: 'index', pathMatch: 'full' },
                    { path: 'admin-analytics', loadChildren: './admin-analytics/admin-analytics.module#AdminAnalyticsModule' },
                    { path: 'customer', loadChildren: './customer/customer.module#CustomerModule' },
                    { path: 'products', loadChildren: './company/company.module#CompanyModule' },
                    { path: 'snacks', loadChildren: './snacks/snacks.module#SnacksModule' },
                    { path: 'plan-management', loadChildren: './plan-management/plan-management.module#PlanManagementModule' },
                    { path: 'index', loadChildren: './index/index.module#IndexModule' },
                    { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
                    { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
                    { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
                    { path: 'form', loadChildren: './form/form.module#FormModule' },
                    { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
                    { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
                    { path: 'table', loadChildren: './table/table.module#TableModule' },
                    { path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' }
                ]
            }

        ]
    }
];

export const routing = RouterModule.forRoot(childRoutes, { enableTracing: true });
