import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return new Promise((resolve, rejects) => {
            let expectedRole: boolean = false;
            let expectedRoleArray: string[] = route.data.expectedRole;
            for (let i = 0; i < expectedRoleArray.length; i++) {
                if (expectedRoleArray[i] == (this.authService.currentUserSubject.value && this.authService.currentUserSubject.value.role)) {
                    expectedRole = true;
                }
            }
            if (this.authService.currentUserSubject.value && expectedRole) {
                resolve(true);
            } else {
                this.router.navigate(['login']);
            }
        });
    }


}