import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConstant } from '../util/app-constant';
import { GenericResponse } from '../util/generic-response';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart-item';
import { Product } from '../model/product';
@Injectable({
    providedIn: 'root'
})
export class CartService {

    cartItemsSubject: BehaviorSubject<CartItem[]>;
    cartItems: Observable<CartItem[]>
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };
    constructor(private http: HttpClient) { }


    getCartItemsOfCustomer(customerId: number): Observable<GenericResponse<CartItem[]>> {
        return this.http.get<GenericResponse<CartItem[]>>(AppConstant.BASE_URL + 'cart/' + customerId);
    }

    getProductDetail(userId: number, productId: number): Observable<GenericResponse<Product[]>> {
        return this.http.get<GenericResponse<Product[]>>(AppConstant.BASE_URL + 'cart/' + productId + '/' + userId);
    }

    addItemToCart(customerId: number, cartItem: CartItem): Observable<GenericResponse<string>> {
        return this.http.put<GenericResponse<string>>(AppConstant.BASE_URL + 'cart/' + customerId, cartItem, this.httpOptions);
    }

    deleteCartItemsOfCustomer(cartItemId: number): Observable<GenericResponse<string>> {
        return this.http.delete<GenericResponse<string>>(AppConstant.BASE_URL + 'cart/' + cartItemId);
    }

    checkout(customerId: number): Observable<GenericResponse<string>> {
        return this.http.put<GenericResponse<string>>(AppConstant.BASE_URL + 'orders/' + customerId, this.httpOptions);
    }
}
