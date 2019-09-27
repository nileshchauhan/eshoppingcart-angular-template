import { Component, OnInit, DoCheck, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { GenericResponse } from 'src/app/util/generic-response';
import { Product } from '../../model/product';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/service/cart.service';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { CustomValidator } from 'src/app/service/custom-validator';
import { NotificationService } from 'src/app/core/service/notification.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  currentUser: User;
  quantity: number = 0;
  productId: number = null;
  sub: any = null;
  productDetail: Product;
  productForm: FormGroup;
  userId: number;

  constructor(
    private route: ActivatedRoute, private router: Router,
    private authService: AuthenticationService,
    private notification: NotificationService, private cartService: CartService) {
    this.currentUser = this.authService.currentUserValue;
    this.userId = this.currentUser ? this.currentUser.userId : 0;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.productId = +params['productId'];

    });
    this.cartService.getProductDetail(this.userId, +this.productId).subscribe((response: GenericResponse<Product[]>) => {
      this.productDetail = (response.list[0]);
      this.quantity = this.productDetail.quantity;
    });

    this.productForm = new FormGroup({
      quantity: new FormControl('', [Validators.required, CustomValidator.validateNumber])
    });

  }

  get formControls() { return this.productForm.controls; }

  async addItemToCart() {

    if (!this.currentUser) {
      this.router.navigate(['login'], { queryParams: { returnUrl: this.router.url } });
      return;
    }

    const cartItem: CartItem = { productId: this.productId, quantity: this.productForm.value.quantity } as CartItem;
    this.cartService.addItemToCart(this.userId, cartItem).subscribe((response: GenericResponse<string>) => {
      this.notification.success(response.message);
      this.router.navigateByUrl('cart');
    });
  }


}
