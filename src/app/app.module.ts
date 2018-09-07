import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './user-service';
import { AppRoutingModule } from './/app-routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    UserDetailComponent,
    EditUserComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
