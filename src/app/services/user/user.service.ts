import { Injectable } from '@angular/core';
import { User } from '../../models/User.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private users: User[] = [
        new User('Nourou', 'Saindou', 'N.saindou@gmail.com', 'thé', ['jonathan', 'musique'])
    ];
    userSubject = new Subject<User[]>();

    constructor() { }

    emitUsers()
    {
        this.userSubject.next(this.users.slice());
    }
}
