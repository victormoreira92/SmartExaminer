import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service: AuthenticationService){}
  
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    
  })

  onSubmit(){
   this.service.login(this.loginForm.value).subscribe(
    (response) => {
      console.log('Login bem-sucedido, resposta:', response); // Ver o retorno da resposta
    },
    (error) => {
      console.error('Erro no login:', error); // Ver se há algum erro
    }
   )
  }
}
