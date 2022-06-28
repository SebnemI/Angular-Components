import { Component, OnInit } from '@angular/core';

interface Product {
  sno: string;
  name: string;
  image: string;
  qty: number;
  price: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public products:Product[]=[
    {
      sno: 'AA101',
      name: 'Mi Watch',
      image: 'https://image01.oneplus.net/ebp/202103/12/1-m00-21-ed-rb8bwmbk1wgadz8_aai9rijgk7q405.png',
      qty: 2,
      price: 1500
    },
    {
      sno: 'AA102',
      name: 'Apple Watch',
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=90&.v=1594259786000',
      qty: 5,
      price: 1800
    },
    {
      sno: 'AA103',
      name: 'Redmi Watch',
      image: 'https://www.elkjop.no/image/dv_web_D180001002937205/419331/xiaomi-redmi-watch-2-lite-sportsklokke-beige.jpg',
      qty: 3,
      price: 1600
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public incrQty(productId : string):void {
    this.products = this.products.map((product)=>{
      if (product.sno === productId){
        return {
          ...product,
          qty:product.qty +1
        }
      }
      return product;
    })
  }

  public decrQty(productId : string):void {
    this.products = this.products.map((product)=>{
      if (product.sno === productId){
        return {
          ...product,
          qty:product.qty -1 >0 ? product.qty -1 : 1
        }
      }
      return product;
    })
  }

  public calcGrandTotal():number {
    let total:number = 0;
    for (let product of this.products){
      total+=(product.qty * product.price);
    }
    return total;
  }

}
