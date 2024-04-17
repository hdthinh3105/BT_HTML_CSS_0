import {Component} from '@angular/core';

@Component({
  selector: 'app-bt-class-3-b',
  templateUrl: './bt-class-3-b.component.html',
  styleUrls: ['./bt-class-3-b.component.css']
})
export class BtClass3BComponent {
  result: string = ''; // Biến lưu trữ kết quả
  a: number= 0; // Biến lưu trữ số thứ nhất
  b: number= 0; // Biến lưu trữ số thứ hai

  sum(a: string, b: string): void {
    this.result = `${a} + ${b} = ${Number(a) + Number(b)}`;
  }

  subtract(a: string, b: string): void {
    this.result = `${a} - ${b} = ${Number(a) - Number(b)}`;
  }

  multiply(a: string, b: string): void {
    this.result = `${a} * ${b} = ${Number(a) * Number(b)}`;
  }

  divide(a: string, b: string): void {
    this.result = Number(b) === 0 ? "không chia được cho 0" : `${a} / ${b} = ${Number(a) / Number(b)}`;
  }
}
