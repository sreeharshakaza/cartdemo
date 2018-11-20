import { Component, Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ProductService} from '../../services/product.service';
import { CartService} from '../../services/cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  providers:[]
})
export class ProductListComponent {
  title = 'shoppingcart';
  productList:any[];
  productListForScroll: any[];
  pageSize: number = 10;
  page: number = 1;

  constructor(private http: Http, private productService: ProductService, private cartService: CartService) {
    var obj;
    this.getJSON();
  }

  public getJSON(){
      return this.http.get("../../../assets/data/products.json").subscribe(
        data => {
          console.log(data.json());
          this.productList = data.json();
          this.productListForScroll = this.productList.slice(0,this.pageSize);
        },
        (err) => {
          console.log ();
        });

  }

  public addToCart(product){
    this.cartService.addProduct(product);
  }

  onScroll() {
    console.log('scrolled!!');
    let _self = this;
    let startIndex =  this.pageSize;
    this.pageSize = this.pageSize * (this.page + 1);
    this.productList.slice(startIndex,this.pageSize).forEach(function(item){
      _self.productListForScroll.push(item);
    });
    
  }
}
