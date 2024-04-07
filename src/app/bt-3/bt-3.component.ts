import { Component } from '@angular/core';

@Component({
  selector: 'app-bt-3',
  templateUrl: './bt-3.component.html',
  styleUrls: ['./bt-3.component.css']
})
export class Bt3Component {
  products: string[] = [];
  newProduct: string = '';

  addProduct() {
    if (this.newProduct.trim() !== '') {
      this.products.push(this.newProduct);
      this.newProduct = '';
    }
  }
}
