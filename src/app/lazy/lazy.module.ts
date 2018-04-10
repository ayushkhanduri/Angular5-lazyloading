import { NgModule } from '@angular/core';

import { LazyComponent }   from './lazy.component';
import { routing } from './lazy.routing';
import {SoloModule } from '../solo/solo.module';
@NgModule({
  imports: [routing, SoloModule],
  declarations: [LazyComponent]
})
export class LazyModule {}
