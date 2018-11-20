import { Injectable } from '@angular/core';  

@Injectable()  
export class CartService {  

    private productList: any[] = [];  

    setProductList(value) {      
        this.productList = value;  
    }  

    getProductList() {  
        return this.productList;  
    }  

    addProduct(value){
        this.productList.push(value);
    }
}  