import {NgModule} from '@angular/core';

import {SoloComponent} from './solo.component';
import { ChangeText } from './solo.directive';
@NgModule({
    declarations: [SoloComponent, ChangeText],
    exports: [SoloComponent , ChangeText]
})

export class SoloModule{};