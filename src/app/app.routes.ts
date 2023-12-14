import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'page2',
        loadComponent: () => import('./page2/page2.component').then(c => Page2Component)
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
        // loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
    }
];
