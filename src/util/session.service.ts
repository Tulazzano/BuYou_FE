import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/iuser';
import { Iproduct } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }



  setStoredProduct(product: Iproduct) {
    sessionStorage.setItem('product', JSON.stringify(product));
  }

  getStoredProduct() {
    return JSON.parse(sessionStorage.getItem('product'));
  }

  setActiveUser(user :Iuser){
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getActiveUser(){
    return JSON.parse(sessionStorage.getItem('user'));
  }

  getStoredList(){
    return JSON.parse(sessionStorage.getItem('productList'));
  }

  setStoredList(product: Iproduct){
    this.setStoredProduct(product);
    if(this.getStoredList() == null){
      let productList = [product];
      sessionStorage.setItem('productList', JSON.stringify(productList));
    }else{
      let productList = this.getStoredList();
      productList.push(product);
      sessionStorage.setItem('productList', JSON.stringify(productList));
    }
  }
}
