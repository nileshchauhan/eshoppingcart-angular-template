import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { GenericResponse } from 'src/app/util/generic-response';
import { Product } from 'src/app/model/product';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { NotificationService } from 'src/app/core/service/notification.service';


@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  products: Product[];
  showLoader;
  dataLoading: EventEmitter<boolean> = new EventEmitter(true);
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  dataSource;


  constructor(
    private notification: NotificationService, private productService: ProductService,
    private dialog: MatDialog) {

  }

  ngOnInit() {
    this.dataLoading.emit(true);
    console.log('submit true from manage product');
    this.productService.getAllProducts().subscribe((response: GenericResponse<Product[]>) => {
      this.dataLoading.emit(false);
      this.products = (response.list);
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteProduct(productId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '25%',
      data: 'Are you sure you want to remove product ?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "ok") {
        this.productService.deleteProduct(+(productId)).subscribe((res: GenericResponse<string>) => {
          this.notification.success(res.message);
          this.ngOnInit();
        });
      }
    });
  }

}
