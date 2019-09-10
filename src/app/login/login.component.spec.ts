import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { LoginComponent } from './login.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CartComponent } from '../cart/cart.component';
import { AuthenticationService } from '../service/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';


@Pipe({
    name: 'translate'
})
export class TranslatePipeMock implements PipeTransform {
    public name = 'translate';
    public transform(query: string, ...args: any[]): any {
        return query;
    }
}


const translations: any = { "APP.TITLE": "DEMO" };

class FakeLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
        return of(translations);
    }
}


describe('Login component ', () => {

    let fixture: ComponentFixture<LoginComponent>;
    let loginComponent: LoginComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AngularMaterialModule, ReactiveFormsModule, FormsModule, AppRoutingModule, HttpClientModule, TranslateModule.forRoot({
                loader: { provide: TranslateLoader, useClass: FakeLoader },
            })],
            declarations: [
                LoginComponent, CartComponent
            ], providers: [AuthenticationService, { provide: TranslatePipe, useClass: TranslatePipeMock }]
        }).compileComponents();
        fixture = TestBed.createComponent(LoginComponent);
        loginComponent = fixture.componentInstance;
        loginComponent.ngOnInit();
    }));

    it('should check login form', () => {
        // loginComponent.loginForm.controls['userName'].setValue('nilesh@gmail.com');
        loginComponent.loginForm.controls['password'].setValue('12');
        // expect(loginComponent.loginForm.valid).toEqual;
        // expect(loginComponent.loginForm.controls['userName'].value).toEqual('nilesh@gmail.com');
        // expect(loginComponent.loginForm.controls['userName'].valid).toEqual(true);
        expect(loginComponent.loginForm.controls['password'].errors.message).toEqual('Password must be atleast 6 characters');

    });
});

