import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';
import { AppConstant } from '../util/app-constant';
import { GenericResponse } from '../util/generic-response';
import { Observable } from 'rxjs';
import { IOrderReportDto } from '../model/order.report';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private http: HttpClient) { }

    getOrderOfCustomer(customerId: number): Observable<GenericResponse<Array<Map<number, IOrderReportDto>>>> {
        // return this.http.get<GenericResponse<Array<Map<number, IOrderReportDto>>>>(AppConstant.BASE_URL + 'orders/' + customerId);
        return this.http.get<GenericResponse<Array<Map<number, IOrderReportDto>>>>(AppConstant.BASE_URL + 'order/get-customer-orders/'
            + customerId);
    }

}
