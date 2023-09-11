import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Items } from '../models/items.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: CartItem[] = [];
  constructor() { }

  clear() {
    this.items = [];
  }
  addItem(item:Items) {
    let foundItem = this.items.find((mItem) => mItem.Items.id === item.id);
    if(foundItem) {
      foundItem.quantity = foundItem.quantity + 1;  
    } else {
        this.items.push(new CartItem(item));
    }
 }

 removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
 }

 total(): number {
     return this.items
       .map(item => item.value())
       .reduce((prev, value) => prev + value, 0); // reduce will adds two parametes, prev + value and will start with 0
 }
 increaseQty(item: CartItem) {
  item.quantity = item.quantity + 1;
}

deCreaseQty(item: CartItem) {
  item.quantity = item.quantity - 1;
  if(item.quantity === 0) {
    this.removeItem(item);
  }
}
 
}
