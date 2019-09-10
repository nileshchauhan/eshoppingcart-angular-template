import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';
import { AppConstant } from '../util/app-constant';
import { GenericResponse } from '../util/generic-response';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<GenericResponse<Product[]>> {
    return this.http.get<GenericResponse<Product[]>>(AppConstant.BASE_URL + 'products');
  }

  getProductById(productId: number): Observable<GenericResponse<Product[]>> {
    return this.http.get<GenericResponse<Product[]>>(AppConstant.BASE_URL + 'products/' + productId);
  }

  deleteProduct(productId: number): Observable<GenericResponse<string>> {
    return this.http.delete<GenericResponse<string>>(AppConstant.BASE_URL + 'products/' + productId);
  }

  saveOrUpdateProduct(product: Product): Observable<Product> {
    if (product.id) {
      return this.http.put<Product>(AppConstant.BASE_URL + 'products/' + product.id, product);
    }
    return this.http.post<Product>(AppConstant.BASE_URL + 'products/', product);
  }

}
