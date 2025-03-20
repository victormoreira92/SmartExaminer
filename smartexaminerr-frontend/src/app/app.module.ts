import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/home/header/header.component';
import { CardBodyComponent, CardComponent, CardModule, DropdownComponent, DropdownModule, GridModule, HeaderModule, NavbarModule, NavComponent, NavModule } from '@coreui/angular';
import { QuizComponent } from './components/quiz/quiz.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    QuizComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderModule,
    GridModule,
    NavbarModule,
    NavComponent,
    NavModule,
    DropdownModule,
    DropdownComponent,
    CardModule,
    CardBodyComponent,
    CardComponent,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync('noop'),
    AuthenticationService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
