import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {
    isLoggedIn: boolean = false;

    constructor() {
        console.log("inside constructor");
        console.log(this.isLoggedIn);
    }

    public changeStatus(): boolean {
        //console.log(this.isLoggedIn);
        this.isLoggedIn = !this.isLoggedIn; 
        return this.isLoggedIn;
    }

}