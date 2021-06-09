import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Basic/login/login.component';
import { RegisterComponent } from './Basic/register/register.component';

const routes: Routes = [
  { path: 'Login-page', component: LoginComponent },
  { path: 'Register-page', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
