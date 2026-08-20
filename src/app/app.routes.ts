import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'customers',
    loadChildren: () => import('./features/customers/customers.routes')
    .then(r => r.customerRoutes)
  }
];
