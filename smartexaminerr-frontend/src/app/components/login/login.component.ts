import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service: AuthenticationService,
              private router: Router
  ){}
  
  form: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    
  })



  onSubmit(){
    if(this.form.valid){
      this.service.login(this.form.value).subscribe(
       (response) => {
        console.log(response)
        this.router.navigateByUrl('/dashboard')
       },
       (error) => {
         console.error('Erro no login:', error); // Ver se há algum erro
       }
      )
    }
  }
}
