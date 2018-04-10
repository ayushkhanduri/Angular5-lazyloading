import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eager',
  template: '<p changeText>Eager Component</p>',
  styleUrls: ['./eager.component.css']
})
export class EagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
