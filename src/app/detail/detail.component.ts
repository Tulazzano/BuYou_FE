
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/util/product.service';
import { SessionService } from 'src/util/session.service';
import { Iproduct } from '../product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  products: Iproduct[] ;

  product: Iproduct;
  productId: number;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private session: SessionService
  ) {
    
 
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => this.products = data);
    console.log(this.products);
    
    //______Prendo l'id sul routing param______
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.productId =productIdFromRoute;
  }

  getImgPath(image: string) {
    return "assets/img/" + image;
  }

  addToCart(product: Iproduct){
    this.session.setStoredList(product);
    window.alert("Prodotto aggiunto al carrello")
  }

}
