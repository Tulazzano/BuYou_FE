import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/util/product.service';
import { Iproduct } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Iproduct[];

  

  constructor( private productservice: ProductService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productservice.getAllProducts().subscribe(data => this.products = data);
  }

  
  getImgPath(image: string) {
    return "assets/img/" + image;
  }
}
