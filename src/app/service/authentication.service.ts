import { EventEmitter, Injectable } from '@angular/core';
import { Login } from '../model/login';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { AppConstant } from '../util/app-constant';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';



@Injectable()
// @Injectable({ providedIn: 'root' })
export class AuthenticationService {

    loggedIn = false;
    user: User;
    currentUserSubject: BehaviorSubject<User>;
    currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.user = JSON.parse(localStorage.getItem('currentUser')) as User;
        this.currentUserSubject = new BehaviorSubject<User>(this.user);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    isAuthenicated() {
        const promise = new Promise((resolve, reject) => {
            resolve(this.loggedIn);
        });
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    getUserByUserNamePassword(login: Login): Observable<User> {
        // return this.http.post<any>(AppConstant.BASE_URL + 'users/login', login);
        const user: User = {
            userId: 1,
            userName: 'nilesh@gmail.com',
            password: 'pmc123',
            role: 'admin',
            firstName: 'Nilesh',
            lastName: 'Chauhan'
        };
        return of(user);
        // return of( as User);
    }

    logOut() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.currentUser = null;
    }
}
