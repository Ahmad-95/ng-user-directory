import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { EditUserComponent } from '../app/edit-user/edit-user.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: 'edit-user/:id',
    component: EditUserComponent },
  { path:'',
    component: UserHomeComponent}
    
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 
  
}
