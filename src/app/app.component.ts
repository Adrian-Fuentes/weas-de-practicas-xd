import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TesteoPractica';
  MuestraContenido = false;
  Confi = false;
  oculta = false;
  Clientes = false;
  Credito = false;
  Teso = false;
  Dispo = false;
  Gestion = false;


  
  ActivaConfig(){
    this.Clientes = false;
    this.Credito = false;
    this.Teso = false;
    this.Dispo = false;
    this.Gestion = false;
  }
  ActivaClientes(){
    this.Confi = false;
    this.Credito = false;
    this.Teso = false;
    this.Dispo = false;
    this.Gestion = false;
   //Dependiendo de la funcionalidad se utilizará:-----> this.MuestraContenido = false;
  }
  ActivaCredito(){
    this.Clientes = false;
    this.Confi = false;
    this.Teso = false;
    this.Dispo = false;
    this.Gestion = false;
  
  }
  ActivaTeso(){
    this.Clientes = false;
    this.Credito = false;
    this.Confi = false;
    this.Dispo = false;
    this.Gestion = false;
    
  }
  ActivaDispo(){
    this.Clientes = false;
    this.Credito = false;
    this.Teso = false;
    this.Confi = false;
    this.Gestion = false;
    
  }
  ActivaGestion(){
    this.Clientes = false;
    this.Credito = false;
    this.Teso = false;
    this.Dispo = false;
    this.Confi = false;
    
  }



}
