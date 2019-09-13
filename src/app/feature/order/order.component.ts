import { Component, OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, AfterViewInit {

  dataLoading: EventEmitter<boolean> = new EventEmitter(true);
  data;

  constructor(private orderService: OrderService) { }

  ngOnInit() {

    // this.orderService.getOrderOfCustomer(this.authService.currentUserValue.userId).subscribe(res => {


  }

  ngAfterViewInit(): void {
    this.dataLoading.emit(true);
    this.orderService.getOrderOfCustomer(1).subscribe(res => {
      this.data = res.response;
      console.log(res.response);
      this.dataLoading.emit(false);
    });
  }

}
