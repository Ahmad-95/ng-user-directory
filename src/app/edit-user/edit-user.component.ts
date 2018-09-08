import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service';
import { User } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: string;
  user: User;


  profileForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    status: new FormControl('',Validators.required)
  });



  constructor(
    private route: ActivatedRoute,
    private userService: UserService) {
    this.route.params.subscribe(params => {
      console.log('xaxa-1', params);
      this.id = params['id'];
    })

    
  }

  ngOnInit() {
    this.user = this.userService.getUserById(+this.id);
    this.profileForm.patchValue({  
      id: this.user.id,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      age: this.user.age,
      gender: this.user.gender,
      email: this.user.email,
      status: this.user.status
    });   
  }
   
    onUpdate() {
      const tempUser: User = {
        id: this.user.id,
        firstName: this.profileForm.get('firstName').value,
        lastName: this.profileForm.get('lastName').value,
        age: this.profileForm.get('age').value,
        gender: this.profileForm.get('gender').value,
        email: this.profileForm.get('email').value,
        status: this.profileForm.get('status').value  
      };

      this.userService.updateUser(+this.id, tempUser);
    }

   get zeus() {
    return JSON.stringify(this.user);
   }


}
