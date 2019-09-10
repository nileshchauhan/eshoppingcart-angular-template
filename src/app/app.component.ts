import { Component, Input, AfterContentChecked, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user';
import { LoaderService } from './service/loader.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {

  title = 'shopping-cart-demo';
  currentUser: User;
  showLoader: boolean;

  constructor(public translate: TranslateService, private ref: ChangeDetectorRef, private loaderService: LoaderService) {
  }


  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    this.ref.detectChanges();
    this.showLoader = this.loaderService.showLoader;
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
  }


}
