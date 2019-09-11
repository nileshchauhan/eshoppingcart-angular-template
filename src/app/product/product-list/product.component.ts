import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { GenericResponse } from '../../util/generic-response';
import { LoaderService } from 'src/app/service/loader.service';
import { NotificationService } from 'src/app/core/service/notification.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  customerId;
  customerName;
  products: Product[] = null;
  productId;

  constructor(
    private productService: ProductService, private loaderService: LoaderService,
    private notification: NotificationService) {

  }

  ngOnInit() {
    this.customerId = window.localStorage.getItem('id');
    this.customerName = window.localStorage.getItem('customerName');
    this.productService.getAllProducts().subscribe((response: GenericResponse<Product[]>) => {
      this.products = (response.response);
    });
  }

  viewProductDetail(productId: number) {
    this.productId = productId;
  }

}
