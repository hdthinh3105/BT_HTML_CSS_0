import { Component } from '@angular/core';

@Component({
  selector: 'app-bt-1',
  templateUrl: './bt-1.component.html',
  styleUrls: ['./bt-1.component.css']
})
export class Bt1Component {
  products: string[] = [];
  newProduct: string = '';

  addProduct() {
    if (this.newProduct.trim() !== '') {
      this.products.push(this.newProduct);
      this.newProduct = '';
    }
  }
}
