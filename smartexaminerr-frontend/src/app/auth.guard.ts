import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthenticationService)
  let router = inject(Router)

  if(!authService.isLoggedIn()){
    router.navigate(['/login'])
    return false
  }
  return true;
};
