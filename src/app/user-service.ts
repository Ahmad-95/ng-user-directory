import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class UserService {
    private users$$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    public readonly users$: Observable<User[]> = this.users$$.asObservable();
    private users: User[] = [];

    constructor() {
        this.users.push({
            id: 1,
            firstName: 'Zain',
            lastName: 'Mohyuddin',
            age: 21,
            gender: 'Male',
            email: 'zain@as.com',
            status: 'active'
        });
        this.users.push({
            id: 2,
            firstName: 'Burhan',
            lastName: 'Mohyuddin',
            age: 23,
            gender: 'Male',
            email: 'burhan@as.com',
            status: 'inactive'
        });
        this.users$$.next(this.users);
    }

    addUser(data: User) {
        console.log('xaxa', data);
        data.id = this.users.length + 1;
        this.users.push(data);
        this.users$$.next(this.users);
    }

    deleteUser(id: number){
        
        const indexOfRecordToDelete =  this.users.map(user => user.id).indexOf(id);
        console.log('xaxa delete', indexOfRecordToDelete);
        this.users.splice(indexOfRecordToDelete);
        // console.log(this.users.findIndex);
        //var found = this.users.find(function(element)
        //console.log(id)
        //delete this.users[id];
        // this.users.splice(id);
    

    }
    getUserById(id: number): User {
        const indexOfUserToBeFetched = this.users.map(user => user.id).indexOf(id);
        if(indexOfUserToBeFetched === -1)
        {
            return undefined;
        }
        console.log("User ID:", indexOfUserToBeFetched);
        return this.users[indexOfUserToBeFetched];     
    }

}