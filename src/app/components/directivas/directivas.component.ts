import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlmacenService } from 'src/app/service/almacen.service';


@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  fontSize: number;

  salida: string;

  @ViewChild('refdiv', { static: true }) leoDiv: ElementRef;
  @ViewChild('refh3', { static: true }) leoHTres: ElementRef;

  @ViewChildren('refh3') leoVariosHTres: QueryList<ElementRef>;

  // constructor(private router: Router,
  //   private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.params.subscribe(params => {

  //   })
  // }

  constructor(private conector: AlmacenService) { }

  ngOnInit() {
    this.verOtraSalida;
    console.log(this.leoDiv.nativeElement.innerHTML);
    console.log(this.leoHTres.nativeElement.innerHTML);
    this.procesoEnvio();
  }

  async procesoEnvio(){
    let envio: number[] = [];
    for (let a = 1; a < 10; a++) {
      envio.push(a);
      await this.later(() => this.conector.setData(envio), 5000);
    }
  }

  later(funcion, delay){
    return new Promise(function(funcion) {
      setTimeout(funcion, delay);
      console.log('enviando ');
    });
  }

  ngAfterViewInit() {
    this.leoVariosHTres.forEach(element => {
      console.log(element.nativeElement.innerHTML);
    });
  }

  setFontSizePlus(): number {
    return this.fontSize + 5;
  }

  // redirect() {
  //   this.router.navigate(['/pipes']);
  // }

  verSalida(mensaje: string) {
    this.salida = mensaje;
  }


  verOtraSalida(mensaje: string) {
    console.log("La otra salida: ", mensaje);
  }

}
