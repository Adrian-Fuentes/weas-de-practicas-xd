import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-tituloy-encierro',
  templateUrl: './tituloy-encierro.component.html',
  styleUrls: ['./tituloy-encierro.component.css'],
  inputs:['../tabla.component/tabla.component.ts']
})

export class TituloyEncierroComponent implements OnInit {
 
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
  constructor() { 
    this.ClUsuario1 = "#DEE1E1";
    this.ClPerfil1 = "white";
  }

  ngOnInit(): void {
  }

}


