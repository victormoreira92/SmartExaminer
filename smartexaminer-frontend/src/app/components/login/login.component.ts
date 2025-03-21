import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { LoginService } from '../../services/login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private service: LoginService
  ){}

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
