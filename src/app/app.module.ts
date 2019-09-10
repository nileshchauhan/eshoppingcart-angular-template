import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticationService } from './service/authentication.service';
import { ProductModule } from './product/product.module';
import { AuthGuard } from './service/auth-guard.service';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AppConstant } from './util/app-constant';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartComponent,
    ConfirmDialogComponent,
    HeaderComponent,
    FooterComponent,
    SnackbarComponent
  ],
  imports: [BrowserAnimationsModule, TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [HttpClient]
    }
  }), LoggerModule.forRoot({
    serverLoggingUrl: AppConstant.BASE_URL + 'logs',
    level: NgxLoggerLevel.TRACE,
    serverLogLevel: NgxLoggerLevel.DEBUG,
    disableConsoleLogging: true
  }),
    BrowserModule, ProductModule, AngularMaterialModule,
    AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule
  ],
  providers: [AuthenticationService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  entryComponents: [ConfirmDialogComponent, SnackbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
