import { Directive, ElementRef} from '@angular/core';

@Directive({
    selector:'[changeText]'
})
export class ChangeText{
    constructor(Element: ElementRef){
        console.log(Element);
        Element.nativeElement.innerText = Element.nativeElement.innerText; 
    }

}