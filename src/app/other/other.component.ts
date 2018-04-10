import { Component } from '@angular/core';
import { LazyService } from '../shared/lazy.service';

@Component({
  template: '<h1>Other Component</h1>'
})
export class OtherComponent {
  constructor(private lazy: LazyService) {
    console.log(this.lazy);
  }
}