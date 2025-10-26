import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Layout/main/main').then(m => m.Main),
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
            },
            {
                path: 'forms',
                loadComponent: () => import('./forms/forms').then(m => m.Forms)
            }
        ]
    }

];
