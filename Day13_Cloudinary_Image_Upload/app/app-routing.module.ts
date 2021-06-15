import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './basic/login/login.component';
import { RegisterComponent } from './basic/register/register.component';
import { UserTableComponent } from './basic/user-table/user-table.component';

const routes: Routes = [
  { path: 'Login-page', component: LoginComponent },
  { path: 'Register-page', component: RegisterComponent },
  { path: 'User-detail', component: UserTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
