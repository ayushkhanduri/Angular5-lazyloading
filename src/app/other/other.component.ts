import { Component } from '@angular/core';
import { LazyService } from '../shared/lazy.service';
import {calculateCube} from '../shared/shared.func';

@Component({
  template: `<h1>Other Component</h1>
  <input type="text" #num (keyup)="onKey(num.value)" />
  <button (click) = "printSquare()">Calculate </button>  
  `
})

export class OtherComponent {
  
  value: string = "";
  
  constructor(private lazy: LazyService) {
    console.log(this.lazy);
  }

  onKey(value: string){
    this.value = value;
  }

  printSquare() {
    alert(calculateCube(Number(this.value)));
  }
}