import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styles: []
})
export class LeftComponent implements OnInit {

  diasSemana: Array<String> = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

  constructor() { }

  ngOnInit() {
  }

}
