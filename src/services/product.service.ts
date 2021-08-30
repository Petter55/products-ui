import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private httpClient: HttpClient){}

    getHighlightedProducts():Observable<any>{
        return this.httpClient.get('/products/hightlights').pipe()
    }

    getProductById(id:string):Observable<any> {
        return this.httpClient.get(`/products?id=${id}`).pipe()
    }
}