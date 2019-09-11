import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { GenericResponse } from 'src/app/util/generic-response';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/service/custom-validator';
import { NotificationService } from 'src/app/core/service/notification.service';

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
              private notification: NotificationService) {
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
        this.notification.show('Product is saved successfully');
        this.router.navigate(['manage/product']);
      }, error => {
        this.notification.error(error);
      });
  }

}


