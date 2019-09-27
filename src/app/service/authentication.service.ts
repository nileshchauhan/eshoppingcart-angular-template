import { EventEmitter, Injectable } from '@angular/core';
import { Login } from '../model/login';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { AppConstant } from '../util/app-constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, IdToken } from '../model/user';
import * as jwt from 'angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable()
// @Injectable({ providedIn: 'root' })
export class AuthenticationService {

    loggedIn = false;
    user: User;
    currentUserSubject: BehaviorSubject<User>;
    currentUser: Observable<User>;
    jwtHelper: JwtHelperService = new JwtHelperService();

    accessToken: string;
    constructor(private http: HttpClient) {
        this.user = JSON.parse(localStorage.getItem('currentUser')) as User;
        this.currentUserSubject = new BehaviorSubject<User>(this.user);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    isAuthenicated(response: User) {
        const decodedToken = this.jwtHelper.decodeToken(response.access_token);
        response.role = decodedToken.authorities[0];
        response.userName = decodedToken.user_name;
        response.userId = decodedToken.userId;
        this.accessToken = response.access_token;
        localStorage.setItem(AppConstant.TOKEN_NAME, response.access_token);
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.currentUserSubject.next(response);
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    getUserByUserNamePassword(login: Login): Observable<User> {
        const body = `username=${encodeURIComponent(login.userName)}&password=${encodeURIComponent(login.password)}&grant_type=password`;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + btoa(AppConstant.TOKEN_AUTH_USERNAME + ':' + AppConstant.TOKEN_AUTH_PASSWORD)
            })
        };
        return this.http.post<User>(AppConstant.TOKEN_URL, body, httpOptions);
    }

    logOut() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.currentUser = null;
    }
}
