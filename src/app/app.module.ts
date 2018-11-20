import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './components/shared/header/header.component';
import { ProductListComponent} from './components/productlist/productlist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatIconModule, MatCardModule} from '@angular/material';
import { ProductService} from './services/product.service';
import { CartService} from './services/cart.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    InfiniteScrollModule
    
  ],
  providers: [HttpModule,ProductService,CartService],
  bootstrap: [AppComponent],
  exports: [MatToolbarModule,MatIconModule,InfiniteScrollModule]
})
export class AppModule { }
