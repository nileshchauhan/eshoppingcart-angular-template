import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, delay } from 'rxjs/operators';

import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { AppConstant } from 'src/app/util/app-constant';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private injector: Injector, private logger: NGXLogger, private authService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // // this.logger.info(req.url + ' - ' + '' + req.method);
        // return next.handle(req).pipe(
        //     delay(500),
        //     finalize(() => { })
        // );

        const currentUser = this.authService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.access_token;
        const isApiUrl = request.url.startsWith(AppConstant.BASE_URL);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.access_token}`
                }
            });
        }

        return next.handle(request);
    }
}
