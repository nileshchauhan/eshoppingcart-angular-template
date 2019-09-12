import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, delay } from 'rxjs/operators';

import { NGXLogger } from 'ngx-logger';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private injector: Injector, private logger: NGXLogger) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // this.logger.info(req.url + ' - ' + '' + req.method);
        return next.handle(req).pipe(
            delay(500),
            finalize(() => { })
        );
    }
}
