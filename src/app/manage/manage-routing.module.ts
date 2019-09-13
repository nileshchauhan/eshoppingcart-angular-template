import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageComponent } from './manage.component';
import { AuthGuard } from '../service/auth-guard.service';
import { AddUpdateProductComponent } from './add-update-product/add-update-product.component';


const routes: Routes = [

    { path: 'manage', redirectTo: 'manage/product', pathMatch: 'full' },
    {
        path: 'manage', component: ManageComponent, children: [
            { path: '', redirectTo: 'product', pathMatch: 'full' },
            { path: 'product', component: ManageProductComponent },
            { path: 'user', component: ManageUserComponent },
            // { path: ':action', component: AddUpdateProductComponent },
            { path: ':action/:productId', component: AddUpdateProductComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ], exports: [RouterModule]
})
export class ManageRoutingModule { }
