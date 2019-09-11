import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { GenericResponse } from 'src/app/util/generic-response';
import { Product } from 'src/app/model/product';
import { MatSort, MatTableDataSource, MatDialog, MatSnackBar, MatPaginator } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { NotificationService } from 'src/app/core/service/notification.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  products: Product[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;


  constructor(
    private notification: NotificationService, private productService: ProductService,
    private dialog: MatDialog) {

  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((response: GenericResponse<Product[]>) => {
      this.products = (response.response);
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
