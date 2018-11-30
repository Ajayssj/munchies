import { Routes, RouterModule } from '@angular/router';
import { SnacksComponent } from './snacks.component';

const childRoutes: Routes = [
    {
        path: '',
        component: SnacksComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
