import { Routes } from '@angular/router';
import { HomeIndexComponent } from './components/home-index/home-index.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    component: HomeIndexComponent,
    path: 'home'
  }
];
