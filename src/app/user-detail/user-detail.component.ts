import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { User } from '../user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  users: User[] = [];
  

  constructor(private userService: UserService,private router: Router) {
  }

  ngOnInit() {
    this.userService.users$.subscribe(users => {
      this.users = users;
      
    })
  }
  onDelete(id: number){
    this.userService.deleteUser(id);
  }

  onEdit(id: number){
    this.router.navigate(['edit-user', id]);
    // console.log("Edit");
  }
  
  // get us() {
  //   return JSON.stringify(this.users);
  // }

 
}



