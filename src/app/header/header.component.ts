import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../model/user';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  defaultLanguage: string = "en";

  constructor(public translate: TranslateService, private router: Router, private authService: AuthenticationService) {
    // translate.addLangs(['en', 'fr']);
    // translate.setDefaultLang(this.defaultLanguage);
  }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => this.currentUser = user);
  }

  changeLanguage(selectedLang: string) {
    this.defaultLanguage = selectedLang
    this.translate.use(selectedLang);
  }

  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }
}
