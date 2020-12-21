import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { Product } from "../models/Product";
import { environment } from "src/environments/environment";

enum DATA_URL {
   PROD = './assets/db.json',
   LOCAL = 'http://localhost:4200/api/products'
}

@Injectable() 
export class ProductService {
    url: string;
    constructor(private http: HttpClient) {
        this.url = environment.production ? DATA_URL.PROD : DATA_URL.LOCAL;
    }
    getProductById(id: string): Observable<Product>{
        return new Observable(observer => {
            this.http.get(this.url).subscribe(data => {
                console.debug(data);
                observer.next();
                observer.complete();
            });
        });
    }

    getAll(): Observable<Product[]>{
        return new Observable(observer => {
            this.http.get(this.url).subscribe((data : Product[])=> {
                console.debug(data);
                if (environment.production) {
                    observer.next(data['products']);
                } else {
                    observer.next(data);
                }
                observer.complete();
            }, error => {
                observer.error(error);
            });
        });
    }
}