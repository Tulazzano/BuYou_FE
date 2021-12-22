import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/product/";
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders;
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'application/json')
  }

  getAllProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.baseUrl + "all", { headers: this.headers });
  }


}
