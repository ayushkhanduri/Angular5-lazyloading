import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';

import {EagerComponent} from './eager/eager.component';

const routes: Routes=[
    {
        path: '', 
        redirectTo: 'eager', 
        pathMatch: 'full' 
    },
    {
        path: 'eager', 
        component: EagerComponent 
    },
    {
        path: 'lazy', 
        loadChildren: 'app/lazy/lazy.module#LazyModule'
    },
    {
        path: 'other',
        loadChildren: 'app/other/other.module#OtherModule'
    }
]

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);
