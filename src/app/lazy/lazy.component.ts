import { Component } from '@angular/core';
import {SampleService} from '../shared/sample.service';
@Component({
  template: '<p changeText>Lazy Component</p>'
})
export class LazyComponent {
  constructor(private service: SampleService) {
    console.log(LazyComponent);
    alert(this.service.changeStatus());
  } 
}