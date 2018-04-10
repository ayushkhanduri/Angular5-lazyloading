import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EagerComponent } from './eager/eager.component';
import { routing } from './app.router';

import {SoloModule} from './solo/solo.module';

import {SampleService} from './shared/sample.service';


@NgModule({
  declarations: [
    AppComponent,
    EagerComponent
  ],
  imports: [
    BrowserModule,
    routing,
    SoloModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
