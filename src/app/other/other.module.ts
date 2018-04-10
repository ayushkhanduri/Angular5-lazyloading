import { NgModule } from '@angular/core';

import { OtherComponent }   from './other.component';
import { routing } from './other.routing';
import {LazyService} from '../shared/lazy.service';

@NgModule({
  imports: [routing],
  declarations: [OtherComponent],
  providers: [LazyService]
})
export class OtherModule {}
