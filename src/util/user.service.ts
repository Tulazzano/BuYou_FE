import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/user/";
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders;
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'application/json')
  }

  getAllUser(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.baseUrl + "all", { headers: this.headers });
  }

  userLogin(params: HttpParams){
    return this.http.post<Iuser>(this.baseUrl + "login",params,{ headers: this.headers })
  }

  userAdd(user:object){
    return this.http.post<any>(this.baseUrl + "add",user,{ headers: this.headers })
  }
}
