import { Component } from '@angular/core';
import helpers from './randomService';
import Consts from './variables';
import {SampleService} from './shared/sample.service';

const someVar = 200;
console.log(someVar);
@Component({
  selector: 'app-root',
  template:  `<h1>My App</h1>
  <nav>
    <a routerLink="eager">Eager</a>
    <a routerLink="lazy">Lazy</a>
    <a routerLink="other"> Other </a> 
  </nav>
  <solo> </solo>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private service: SampleService) {
    alert(this.service.isLoggedIn);
  }
}

