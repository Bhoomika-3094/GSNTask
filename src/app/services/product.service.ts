import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getproduct(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/product");
    console.log("product service called!!!");
  }

}
