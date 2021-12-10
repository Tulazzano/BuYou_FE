import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'BuYou';

  constructor(private router: Router){}

  goToHome(){
    this.router.navigateByUrl('home');
}

goToProduct(){
  this.router.navigateByUrl('product');
}

}
