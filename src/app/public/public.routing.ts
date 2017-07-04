import { Routes, RouterModule }  from '@angular/router';
import { Public } from './public.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [

  {
    path: 'public',
    component: Public,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadChildren: 'app/public/login/login.module#LoginModule'
      },
      {
        path: 'register',
        loadChildren: 'app/public/register/register.module#RegisterModule'
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
