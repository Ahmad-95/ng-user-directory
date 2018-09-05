import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { User } from '../user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.users$.subscribe(users => {
      this.users = users;
      
    })
  }
  onDelete(id: number){
    this.userService.deleteUser(id);
  }

  // get us() {
  //   return JSON.stringify(this.users);
  // }

 
}



