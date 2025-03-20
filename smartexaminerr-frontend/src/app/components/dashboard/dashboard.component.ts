import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private authService: AuthenticationService,
              private router: Router
  ){}

  logout() {
    this.authService.logout().subscribe(()=>
    {
      this.router.navigate(['/login'])
    })
    
  }

}
