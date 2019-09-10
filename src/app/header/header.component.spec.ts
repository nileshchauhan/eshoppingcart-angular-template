import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { AuthenticationService } from '../service/authentication.service';
import { HttpClient } from 'selenium-webdriver/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent], imports: [AngularMaterialModule, RouterTestingModule, HttpClientModule, TranslateModule.forRoot()],
      providers: [TranslateService, AuthenticationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



class MockRouter {
  navigate = jasmine.createSpy('navigate');
}