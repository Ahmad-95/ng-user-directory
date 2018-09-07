import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service';
import { User } from '../user';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: string;
  user: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.route.params.subscribe(params => {
      console.log('xaxa-1', params);
      this.id = params['id'];
    })
  }

  ngOnInit() {
    this.user = this.userService.getUserById(+this.id);  
  }
  
   get zeus() {
    return JSON.stringify(this.user);
   }

  

}
