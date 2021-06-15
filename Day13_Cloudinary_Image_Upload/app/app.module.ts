import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicComponent } from './basic/basic.component';
import { LoginComponent } from './basic/login/login.component';
import { RegisterComponent } from './basic/register/register.component';
import { UserTableComponent } from './basic/user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    LoginComponent,
    RegisterComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'dm7lrw0hf', upload_preset: 'gwkgorip' })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
