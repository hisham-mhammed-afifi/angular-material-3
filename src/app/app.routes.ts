import { Routes } from '@angular/router';
import { WelcomComponent } from './pages/welcom/welcom.component';

/**
 * each route will be for a module in angular material 3.
 * example:
 * "path": "component"
 * "path": "cdk"
 */

export const routes: Routes = [
  {
    path: '',
    component: WelcomComponent,
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./components/components.routes').then((m) => m.routes),
  },
];
