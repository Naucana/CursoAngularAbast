import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(texto: string, todo: boolean = false): string {
    let frase: string[] = texto.split(' ');
    let resultado: string = '';

    if (todo) {
     frase.forEach(element => {
       resultado = resultado + element.charAt(0).toUpperCase() + element.substring(1).toLowerCase() + ' ';
     });
    } else {
      resultado = texto.charAt(0).toUpperCase() + texto.substring(1).toLowerCase();
    }
    return resultado;
  }

}
