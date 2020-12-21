import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { Product } from "../models/Product";

@Injectable() 
export class ProductService {
    constructor(private http: HttpClient) {}
    getProductById(id: string): Observable<Product>{
        return new Observable(observer => {
            this.http.get('http://localhost:4200/api/products').subscribe(data => {
                console.debug(data);
                observer.next();
                observer.complete();
            });
        });
    }

    getAll(): Observable<Product[]>{
        return new Observable(observer => {
            this.http.get('http://localhost:4200/api/products').subscribe((data : Product[])=> {
                console.debug(data);
                observer.next(data);
                observer.complete();
            }, error => {
                observer.error(error);
            });
        });
    }
}