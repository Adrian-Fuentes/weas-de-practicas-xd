import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  DatoName: string;
  DatoRFC: string;
  DatoCr: string;
  arr = [{id: 1, name: 'Miguel de la Torre Sifuentes ', rfc: '', email: 'legal@gdn.com', perfil: ''}];
  arr2 = this.arr;
  pasaP  = [{id: 1 , nande: 'Aprobado', Fecha: 'GDFN123654IO7', che1: true,che2: true,che3: true,che4: true,che5: true,che6: true,che7: true}];
  ident: number;
  PerfilSe:string;

  private value = new BehaviorSubject<string>('');
  filterValue$ = this.value.asObservable();

  get getFiltervalue(): string {
      return this.value.value;
  }

  set setFiltervalue(value: string ) {
     this.value.next(value);
  }

  constructor() {
  }
  /*
  DatoP(Perfil:any){
    this.PerfilSe =  Perfil;
    console.log("El perfil es: ");

    console.log(this.PerfilSe);
  }
    */
  // pasar objetos y empujarlos (meterlos) al array de la tabla
  toTable() {
    console.log( this.arr);
  }

 PasaValor(value:string){
   console.log("si se paso xd");
   console.log("el valor es:");
   console.log(value);

   this.setFiltervalue = value;

  }





  paso() {
    console.log(this.pasaP);
  }
// Parte de la tabla de los perfiles
}
