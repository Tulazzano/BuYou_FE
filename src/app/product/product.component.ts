import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/util/product.service';
import { Iproduct } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Iproduct[];


  constructor(
    private productservice: ProductService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getAll();
   
  }

  getAll() {
    this.productservice.getAllProducts().subscribe(data => this.products = data);
  }

  goToDetail() {
    this.router.navigateByUrl('home')
  }

  getImgPath(image: string) {
    return "assets/img/" + image;
  }

}
