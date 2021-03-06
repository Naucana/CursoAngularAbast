import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple',
  template: `
    <p>
      This is -> {{ mensaje }}
    </p>
  `,
  styles: []
})
export class MultipleComponent implements OnInit {

  @Input('wololo') mensaje: string;

  @Output() salida: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.salida.emit("Esto es un mensaje de salida del componente Multiple");
  }
}
