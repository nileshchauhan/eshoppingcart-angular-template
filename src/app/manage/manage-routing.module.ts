import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageComponent } from './manage.component';
import { AuthGuard } from '../service/auth-guard.service';
import { AddUpdateProductComponent } from './add-update-product/add-update-product.component';


const routes: Routes = [

    {
        path: '', component: ManageComponent, children:
            [{ path: 'product', component: ManageProductComponent },
            { path: 'product/:action', component: AddUpdateProductComponent },
            { path: 'product/:action/:productId', component: AddUpdateProductComponent },
            { path: 'user', component: ManageUserComponent }]
    }

]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ], exports: [RouterModule]
})
export class ManageRoutingModule { }
