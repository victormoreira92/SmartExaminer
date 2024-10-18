import { Routes } from '@angular/router';
import { HomeIndexComponent } from './components/home-index/home-index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    component: HomeIndexComponent,
    path: 'home'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path:'register'
  }
];
