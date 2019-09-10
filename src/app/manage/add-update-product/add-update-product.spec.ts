import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { AddUpdateProductComponent } from './add-update-product.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';


describe('add-update product component ', () => {

    let fixture: ComponentFixture<AddUpdateProductComponent>;
    let component: AddUpdateProductComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddUpdateProductComponent],
            imports: [AngularMaterialModule, ReactiveFormsModule, RouterTestingModule, HttpClientModule],
            providers: [{ provide: ActivatedRoute, useValue: { params: of([{ id: 1 }]), } }]
        }).compileComponents();
        fixture = TestBed.createComponent(AddUpdateProductComponent);
        component = fixture.componentInstance;
        component.ngOnInit();

    }));

    it('should check component is loaded or not ', () => {
        expect(component).toBeTruthy();
    })

    it('should check product for is invalid ', () => {
        // expect(component).toBeTruthy();

        component.productForm.controls['name'].setValue('Product 1');
        component.productForm.controls['description'].setValue('This is description');
        component.productForm.controls['price'].setValue('1a');
        component.productForm.controls['image'].setValue('this is image');

        // expect(component.productForm.controls['name'].errors.required).toEqual(false);
        // expect(component.productForm.controls['description'].errors.required).toEqual(false);
        expect(component.productForm.controls['price'].errors.message).toEqual('please enter proper value');
        // expect(component.productForm.controls['image'].errors.required).toEqual(false); 
        expect(component.productForm.invalid).toEqual(true);
    })
});

