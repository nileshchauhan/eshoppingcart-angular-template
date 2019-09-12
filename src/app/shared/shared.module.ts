import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DiscountCalculatorPipe } from './discount-calculator/discount-calculator.pipe';
import { DiscountedPriceDirective } from './discounted-price/discounted-price.directive';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        FlexLayoutModule,
        ToastrModule.forRoot(), // ToastrModule added
        TranslateModule
    ],
    declarations: [
        ConfirmDialogComponent,
        DiscountCalculatorPipe,
        DiscountedPriceDirective,
        SpinnerComponent
    ],
    schemas: [],
    providers: [],
    entryComponents: [ConfirmDialogComponent],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        TranslateModule,
        ToastrModule,
        ConfirmDialogComponent,
        DiscountCalculatorPipe,
        DiscountedPriceDirective,
        SpinnerComponent
    ]
})
export class SharedModule { }
