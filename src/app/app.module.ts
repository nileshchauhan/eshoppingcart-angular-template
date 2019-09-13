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
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AppConstant } from './util/app-constant';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './feature/feature.module';
import { OrderService } from './service/order.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [CoreModule, SharedModule, BrowserAnimationsModule, TranslateModule.forRoot({
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
    AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule, FeatureModule
  ],
  providers: [AuthenticationService, OrderService, AuthGuard,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
