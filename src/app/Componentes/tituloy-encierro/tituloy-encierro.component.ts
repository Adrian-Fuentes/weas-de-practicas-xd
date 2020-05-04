import { Component, OnInit} from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { TablaUsComponent } from '../tabla-us/tabla-us.component';



@Component({
  providers:[DatosService,TablaUsComponent],
  selector: 'app-tituloy-encierro',
  templateUrl: './tituloy-encierro.component.html',
  styleUrls: ['./tituloy-encierro.component.css'],
  inputs:['../tabla.component/tabla.component.ts']
})
export class TituloyEncierroComponent implements OnInit {
  
  handleSearch(value:string){
    //obtiene el valor del texto
    console.log(value);
    //declara el valor en una variable
    this.ValorDado = value;
    console.log(this.ValorDado);
    //envia el valor al servicio
    this.tabla.ObtenerDato(this.ValorDado)
   this.service.PasaValor(this.ValorDado);
  
  }

  ValorDado:string;
  ClUsuario1: string;
  ClPerfil1: string;
  oculta1: string;
  
  
  cambiaColorUsuario(){
    console.log("se activo")
    this.ClUsuario1 = "white";
    this.ClPerfil1 = "#DEE1E1";
   
  }
  CambiarPerfil(){
    console.log("checar");
    this.ClPerfil1 = "White";
    this.ClUsuario1 = "#DEE1E1";
    this.oculta1 = "none"
    
  }
  constructor(private service:DatosService,private tabla:TablaUsComponent) { 
    this.ClUsuario1 = "#DEE1E1";
    this.ClPerfil1 = "white";
  }

  ngOnInit(): void {
  }

}


