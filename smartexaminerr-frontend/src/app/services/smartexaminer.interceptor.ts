import { HttpInterceptorFn } from '@angular/common/http';

export const smartexaminerInterceptor: HttpInterceptorFn = (req, next) => {
  const jwt_token = getJwtToken() 
  if(jwt_token){
    req.clone({
      setHeaders:{
        Authorization: `Bearer ${jwt_token}`
      }
    })
  }
  return next(req);
};

function getJwtToken(): string | null {
  return localStorage.getItem('JWT_TOKEN')
}
