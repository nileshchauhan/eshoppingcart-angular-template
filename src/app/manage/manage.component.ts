import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-manage-user',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
    defaultLanguage: string = "en";
    constructor(public translate: TranslateService) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang(this.defaultLanguage);
    }

    ngOnInit() {
    }
}
