import { Component, OnInit } from '@angular/core';
import { AlmacenService } from 'src/app/service/almacen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  paraSalida: string;
  suscripcion: Subscription;

  constructor(private conector: AlmacenService) { }

  ngOnInit() {
    this.suscripcion = this.conector.dataSource$.subscribe(dato => {
      console.log(dato);
      this.paraSalida = dato.join("/");
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.suscripcion.unsubscribe();
  }

}
