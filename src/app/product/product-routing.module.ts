import { NgModule } from '@angular/core';
import { ProductComponent } from './product-list/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: ProductComponent },
{ path: 'product/:productId', component: ProductDetailComponent }]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class ProductRoutingModule { }
