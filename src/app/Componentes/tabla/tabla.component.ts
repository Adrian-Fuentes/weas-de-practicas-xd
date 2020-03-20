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
  datoss: any;
  constructor(public ElService: DatosService) { 
    this.Per = "Aprobado"
    this.profiles = this.ElService.pasaP;
  }
  avr(id:number){
    console.log("si pasa xd")
    console.log(id);
    this.datoss = this.ElService.pasaP.find(resul => resul.id === id+1);
    console.log(this.datoss);
    this.ElService.pasaP.splice(id,1);
    
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
