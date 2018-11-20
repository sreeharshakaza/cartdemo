import { Injectable } from '@angular/core';  

@Injectable()  
export class ProductService {  

    private productList = {};  

    setProductList(value) {      
    this.productList = value;  
    }  

    getProductList() {  
    return this.productList;  
    }  
}  