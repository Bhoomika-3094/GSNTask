import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from '../app/product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductDetialComponent } from './product-detial/product-detial.component';


const routes: Routes = [
  {path : 'product' , component : ProductComponent},
  {path : 'customer', component: CustomerComponent},
  {path: 'productDetail/:id/:invoiceNo', component:ProductDetialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
