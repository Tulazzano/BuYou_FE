import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SessionService } from 'src/util/session.service';
import { Iproduct } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: Iproduct[] = [];
  totale: number;
  constructor(private session: SessionService) { }


  ngOnInit() {
    this.cartProducts = (this.session.getStoredList());
    this.totale = this.calcolaTotale();
  }

  calcolaTotale() {
    var count = 0;
    for (let i = 0; i < this.cartProducts.length; i++) {
      count += this.cartProducts[i].price;
    }
    return count;
  }

}
