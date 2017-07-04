import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: 'secure', loadChildren: './secure/secure.module#SecureModule' },
  { path: '**', redirectTo: 'public/login' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
