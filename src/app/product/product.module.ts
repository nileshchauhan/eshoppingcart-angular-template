import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product-list/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DiscountCalculatorPipe } from '../shared/discount-calculator/discount-calculator.pipe';
import { DiscountedPriceDirective } from '../shared/discounted-price/discounted-price.directive';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({

    imports: [
        CommonModule, AngularMaterialModule,
        ProductRoutingModule, FormsModule, ReactiveFormsModule
    ],
    declarations: [ProductComponent, ProductDetailComponent, DiscountCalculatorPipe,
        DiscountedPriceDirective], exports: [DiscountedPriceDirective]
})
export class ProductModule { }