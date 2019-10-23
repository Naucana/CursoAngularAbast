import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  private numerico: number = 12345.6;
  private cadena: string = "Esto es cadena de perro";
  private fecha: Date = new Date;
  private lista: number[] = [1, 2, 3, 4, 5, 6];
  private PI: number = Math.PI;
  private percent: number = 0.4546;
  private frasePipe: string = 'esto no es una broma';

  constructor() { }

  ngOnInit() {
  }

}
