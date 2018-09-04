import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class UserService {
    users: any[] = [];
    constructor(){}
    
    addUser(data: any){
        this.users.push(data) ;
        console.log("From Service",this.users);
    }
 
}