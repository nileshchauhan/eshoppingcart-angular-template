import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { GenericResponse } from 'src/app/util/generic-response';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { NGXLogger, LoggerConfig } from 'ngx-logger';
import { CustomValidator } from 'src/app/service/custom-validator';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.css']
})
export class AddUpdateProductComponent implements OnInit {
  productForm: FormGroup;
  productId: number;
  product: Product;
  action: string = 'add';

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService,
    private snackbarService: SnackbarService) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.action = params['action'];
      if (this.action === 'edit') {
        this.productId = +params['productId'];
      }
    });

    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', []),
      price: new FormControl('', [Validators.required, CustomValidator.validateNumber]),
      image: new FormControl('', [Validators.required])
    });

    if (this.action === 'edit') {
      this.productService.getProductById(this.productId).subscribe((response: GenericResponse<Product[]>) => {
        this.product = response.response[0];
        // this.productForm = new FormGroup({
        //   name: new FormControl(this.product.name, [Validators.required]),
        //   description: new FormControl(this.product.description, [Validators.required]),
        //   price: new FormControl(this.product.price, [Validators.required, CustomValidator.validateNumber]),
        //   image: new FormControl(this.product.image, [Validators.required])
        // });
      });
    }
  }

  addOrUdateItem() {

    const product: Product = this.productForm.value as Product;
    product.price = +product.price;
    product.id = this.productId;
    this.productService.saveOrUpdateProduct(product).subscribe(
      (response: Product) => {
        console.log('this is saved product log', response);
        this.snackbarService.openSnackBar('Product is saved successfully', 'success');
        this.router.navigate(['manage/product']);
      }, error => {
        this.snackbarService.openSnackBar(error, 'error');
      });
  }

}


