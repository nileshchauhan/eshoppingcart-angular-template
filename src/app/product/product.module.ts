import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product-list/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({

    imports: [
        CommonModule, AngularMaterialModule,
        ProductRoutingModule, FormsModule, ReactiveFormsModule, SharedModule
    ],
    declarations: [ProductComponent, ProductDetailComponent], exports: []
})
export class ProductModule { }