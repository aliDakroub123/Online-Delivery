import { map } from 'rxjs/operators';
import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../models/items.model';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  products: any[] = [];
  constructor(private http: HttpClient) { }

  getMenuByName(restaurantName: string): Observable<any> {
    const url = `http://localhost:80/The Delivery Master/getItems.php`;
    return this.http.get(url);
  }

  menuOfRestaurant(id: string): Observable<any> {
    const URL_API= "http://localhost:3000/restaurants/${id}/menu";
    return this.http.get(URL_API);
      
  }







  
  getProduct() {
    return this.products;
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.products));
  }

  addToCart(addedProduct: any) {
    this.products.push(addedProduct);
    this.saveCart();
  }

  loadCart(): void {
    this.products = JSON.parse(localStorage.getItem('cart_items') as any) || [];
  }

  productInCart(product: any): boolean {
    return this.products.findIndex((x: any) => x.id === product.id) > -1;
  }

  removeProduct(product: any) {
    const index = this.products.findIndex((x: any) => x.id === product.id);

    if (index > -1) {
      this.products.splice(index, 1);
      this.saveCart();
    }
  }

  clearProducts() {
    localStorage.clear();
  }
}
