import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user-service';
import { FirstNameValidator } from '../user-validator';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  
  profileForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', [Validators.required, FirstNameValidator()]),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    status: new FormControl('',Validators.required)
  });
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  
  onSubmit() {
    
    //console.log(this.profileForm.value);
    
    this.userService.addUser(this.profileForm.value);
    this.profileForm.reset();
    
  }

  // get formValue() {
  //   return JSON.stringify(this.profileForm.value);
  // }

}

