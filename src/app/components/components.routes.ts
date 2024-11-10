import { Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { ButtonsComponent } from './buttons/buttons.component';

export const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
    ],
  },
];
