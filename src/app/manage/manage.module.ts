import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { AuthenticationService } from '../service/authentication.service';
import { AuthGuard } from '../service/auth-guard.service';
import { AddUpdateProductComponent } from './add-update-product/add-update-product.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({

    imports: [
        CommonModule, AngularMaterialModule,
        FormsModule, ReactiveFormsModule, ManageRoutingModule, TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
    ],
    declarations: [ManageComponent, ManageProductComponent, ManageUserComponent, AddUpdateProductComponent], exports: []
})
export class ManageModule { }