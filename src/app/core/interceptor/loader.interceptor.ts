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
import { LoaderService } from '../../service/loader.service';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private injector: Injector, private logger: NGXLogger) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const loaderService = this.injector.get(LoaderService);
        loaderService.show();
        // this.logger.info(req.url + ' - ' + '' + req.method);
        return next.handle(req).pipe(
            delay(500),
            finalize(() => loaderService.hide())
        );
    }
}
