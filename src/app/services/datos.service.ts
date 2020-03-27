import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  DatoName: string;
  DatoRFC: string;
  DatoCr: string;
  arr = [{id: 1, name: 'Miguel de la Torre Sifuentes ', rfc: '', email: 'legal@gdn.com'}];
  arr2: Array<object> = [];
  pasaP  = [{id: 1 , nande: 'Aprobado', Fecha: 'GDFN123654IO7', che1: true,che2: true,che3: true,che4: true,che5: true,che6: true,che7: true}];
  ident: number;
  constructor() {

  }
  // pasar objetos y empujarlos (meterlos) al array de la tabla
  toTable() {
    console.log( this.arr);


  }
  paso() {
    console.log(this.pasaP);
  }
// Parte de la tabla de los perfiles
}
