import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AuthenticationService } from './service/authentication.service';

describe('AppComponent', () => {



    // let fixture: ComponentFixture<AppComponent>;
    // let appComponent: AppComponent;

    // beforeEach(async(() => {
    //     TestBed.configureTestingModule({
    //         declarations: [AppComponent],
    //         imports: [AngularMaterialModule], schemas: [CUSTOM_ELEMENTS_SCHEMA]
    //     }).compileComponents().then(() => {
    //         fixture = TestBed.createComponent(AppComponent);
    //         appComponent = fixture.componentInstance;
    //         fixture.detectChanges();
    //     });
    // }));

    // it('should create the app', async(() => {
    //     expect(appComponent).toBeTruthy();
    // }));

    // it(`should have as title`, async(() => {
    //     expect(appComponent.title).toEqual('shopping-cart-demo');
    // }));

    // it('should render title in a h1 tag', async(() => {
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-testing-with-material!');
    // }));
});