import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Basic/login/login.component';
import { RegisterComponent } from './Basic/register/register.component';

const routes: Routes = [
  { path: 'login-page', component: LoginComponent },
  { path: 'register-page', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
