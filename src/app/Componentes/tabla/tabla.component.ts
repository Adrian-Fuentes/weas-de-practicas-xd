import { Component, OnInit, Output, Host } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  
})
export class TablaComponent implements OnInit {
  TPer: string;
  showModal: boolean;
  Per: string;
  Per1: string;
  profiles: Array<object> = [];
  constructor(public ElService: DatosService) { 
    this.Per = "Aprobado"
    this.profiles = this.ElService.pasaP;
  }
  avr(){
    console.log("si pasa xd")
  }
  //MOSTRAR EL EDITADO
  show(){
    this.showModal = true;
  }
  //CERRAR EL EDITADO
  hide(){
    this.showModal = false;
  }
  //AL DAR CANCELAR (EDITADO)
  quita(){
    this.Per1 = ""
  }
  //AL DAR GUARDAR (EDITADO)
  setData1(){
    console.log("aqui xd");
    this.Per = this.Per1;
  }
  ngOnInit(): void {

  }


}
