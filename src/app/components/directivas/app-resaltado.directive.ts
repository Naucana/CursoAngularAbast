import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class AppResaltadoDirective {

  nuevoColor: string;

  constructor(private el: ElementRef) {
    console.log("directiva llamada " + this.nuevoColor);
    this.resaltar(this.nuevoColor ||  "yellow");
  }

  @HostListener('mouseenter') ratonEntro(){
    this.resaltar('red');
  }
  @HostListener('mouseleave') ratonSalgo(){
   this.resaltar('transparent');
  }

  resaltar(nuevoColor: string){
    this.nuevoColor = nuevoColor;
    this.el.nativeElement.style.backgroundColor = nuevoColor;
  }
}
