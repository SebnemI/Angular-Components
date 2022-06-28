import { Component, OnInit } from '@angular/core';

interface Product {
  sno: string;
  name: string;
  image: string;
  qty: number;
  price: number;
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product: Product = {
    sno: 'AA101',
    name: 'Mi Watch',
    image: 'https://image01.oneplus.net/ebp/202103/12/1-m00-21-ed-rb8bwmbk1wgadz8_aai9rijgk7q405.png',
    qty: 2,
    price: 1500
  };

  constructor() { }

  ngOnInit(): void {
  }

  public incrementQty():void{
    this.product = {
      ...this.product,
      qty : this.product.qty + 1
    }
  }

  public decrementQty():void{
    this.product = {
      ...this.product,
      qty : this.product.qty - 1 >0 ? this.product.qty -1 : 1
    }
  }

}
