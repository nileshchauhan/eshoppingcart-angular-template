import { Component, Input, AfterContentChecked, OnInit, ChangeDetectorRef } from '@angular/core';
import { User } from './model/user';
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

  constructor(public translate: TranslateService, private ref: ChangeDetectorRef) {
  }


  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    this.ref.detectChanges();
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
  }


}
