import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'view' },
    { path: 'view', component: OrderComponent }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ], exports: [RouterModule]
})
export class FeatureRoutingModule { }
