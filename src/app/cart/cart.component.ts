import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { GenericResponse } from '../util/generic-response';
import { CartItem } from '../model/cart-item';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../model/user';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { NotificationService } from '../core/service/notification.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  currentUser: User;
  cartDetails: CartItem[];
  customerId: string;
  total = 0;
  dataSource;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog, private cartService: CartService,
    private authService: AuthenticationService,
    private notification: NotificationService, private router: Router) {

  }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
    this.cartService.getCartItemsOfCustomer(this.currentUser.userId).subscribe((res: GenericResponse<CartItem[]>) => {
      this.cartDetails = (res.response);
      this.total = this.cartDetails.map((detail: CartItem) => detail.totalAmount).reduce((acc, value) => acc + value, 0);
      this.dataSource = new MatTableDataSource(this.cartDetails);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

  }

  removeItemFromCart(cartItemId) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '25%',
      data: 'Are you sure you want to remove item from cart ?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok') {
        this.cartService.deleteCartItemsOfCustomer(cartItemId)
          .subscribe((res: GenericResponse<string>) => {
            this.notification.success(res.message);
            this.ngOnInit();
          });
      }
    });
  }

  checkout() {
    this.cartService.checkout(this.currentUser.userId).subscribe((response: GenericResponse<string>) => {
      if (response.code == 200 || response.code == 201 || response.code == 204) {
        this.notification.success(response.message);
        this.router.navigate(['orders']);
      } else {
        this.notification.error(response.message);
      }
    });
  }

}
