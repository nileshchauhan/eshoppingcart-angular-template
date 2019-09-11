import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { LoaderInterceptor } from './interceptor/loader.interceptor';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true
        }
    ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        super(parentModule);
    }

}
