import { Component, OnInit, Input, AfterContentInit, EventEmitter, AfterViewInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { GenericResponse } from '../../util/generic-response';
import { NotificationService } from 'src/app/core/service/notification.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit, AfterViewInit {


  dataLoading: EventEmitter<boolean> = new EventEmitter(true);
  customerId;
  customerName;
  products: Product[] = null;
  productId;

  constructor(
    private productService: ProductService,
    private notification: NotificationService) {

  }

  ngOnInit() {
    this.customerId = window.localStorage.getItem('id');
    this.customerName = window.localStorage.getItem('customerName');
    this.productService.getAllProducts().subscribe((response: GenericResponse<Product[]>) => {
      this.dataLoading.emit(false);
      this.products = (response.list);
    });
  }

  ngAfterViewInit(): void {
    this.dataLoading.emit(true);
  }

  viewProductDetail(productId: number) {
    this.productId = productId;
  }

}
