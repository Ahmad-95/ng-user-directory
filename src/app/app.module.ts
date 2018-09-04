import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from './user-service';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
