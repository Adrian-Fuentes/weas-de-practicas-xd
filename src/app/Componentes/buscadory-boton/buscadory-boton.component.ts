import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';



@Component({
  selector: 'app-buscadory-boton',
  templateUrl: './buscadory-boton.component.html',
  styleUrls: ['./buscadory-boton.component.css']
})
export class BuscadoryBotonComponent implements OnInit {
id : any;
showModall:boolean;
name:string;
Datitos = {
  nande: '',
  Fecha: 'GDFN123654IO7'
}
  constructor(public servicio: DatosService) { 
    
  }
Guardar(){
  this.id = this.servicio.pasaP.length +1;
this.servicio.pasaP.push({id:this.id , nande:this.name, Fecha:'GDFN123654IO7'});
console.log(this.Datitos);
this.servicio.paso();
}
crear(){
  this.showModall = true;
}
quitar(){
this.showModall = false;
}
RegresarD(){

}
  ngOnInit(): void {
  }

}
