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
  _Dato= '';
  //se define el subject para el seguimiento
  private value = new BehaviorSubject<string>('');
  //se crea un observable para actualizar los datos
  filterValue$ = this.value.asObservable();
  //se conecta 
  get getFiltervalue(): string {
      return this.value.value;
   }
   //se pasa la variable
  set setFiltervalue(value: string ) {
     this.value.next(value);
  }

  ValuePasa = '';
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

   this.ValuePasa = value;
   return (this.ValuePasa);
  }

  PasaLosD(ValorP:string){
    console.log("si paso xd ::");
    console.log(ValorP);
    this._Dato = ValorP;
    return (this._Dato);

  }




  paso() {
    console.log(this.pasaP);
  }
// Parte de la tabla de los perfiles
}
