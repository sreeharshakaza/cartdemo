import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'shoppingcart';
  cartList: any[];
  constructor(private cartService: CartService) {}

  ngOnInit(){
    this.cartList = this.cartService.getProductList();

  }

  openDialog(){
    
  }
}
