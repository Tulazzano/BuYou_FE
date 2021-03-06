import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from "./cart/cart.component";
import { DetailComponent } from "./detail/detail.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductComponent } from "./product/product.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'product', component: ProductComponent },
    { path: 'detail/:productId', component: DetailComponent},
    { path: 'cart', component: CartComponent },

    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ApproutingModule { }
export const routingComponents = [LoginComponent, HomeComponent, RegisterComponent, ProductComponent, PageNotFoundComponent,DetailComponent,CartComponent];