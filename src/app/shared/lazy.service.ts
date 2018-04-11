import { Injectable } from '@angular/core';

@Injectable()
export class LazyService {
    constructor() {
        console.log("first initialization");
       
    }

    firstMethod(): void{
        console.log("asdasasdasd");
    }

}