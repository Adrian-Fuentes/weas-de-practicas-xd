import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { BotonsUComponent } from '../botons-u/botons-u.component';




@Component({
  providers:[BotonsUComponent],
  selector: 'app-tabla-us',
  templateUrl: './tabla-us.component.html',
  styleUrls: ['./tabla-us.component.css']
})
export class TablaUsComponent implements OnInit {
  showModal: boolean;
  name: string = "Miguel de la Torre Sifuentes"; 
  name2: string;
  correo: string = "legal@gdn.com" ;
  correo2: string;
  edit: string;
  corr: string;
  RFC1: string;
  RFC: string;
  avr: any ;
  info:any;
  Datos:Array<object> = [{
    id:1
  }
    
  ];
  activa: boolean = false;
  wea1: string;
  constructor(public dataservice: DatosService, public botons:BotonsUComponent) {
    // Se declara los valores del arr para activar el NgFor
    this.Datos = this.dataservice.arr;
    console.log(this.Datos);
   
   }
  
   //MUESTRA EL POP-UP
  show(id:number){
    this.showModal = true;
    console.log("El id es: ");
    console.log(id);

    this.info = this.dataservice.arr.find(resul => resul.id === id+1);
    console.log(this.info);
    this.name2 = this.info.name;
    this.RFC1 = this.info.rfc;
    this.correo2 = this.info.email;
    
    
  }
  //OCULTA EL POP-UP
  hide(){
    this.showModal = false;
  }
  //AL PRESIONAR CANCELAR (EDITAR DATOS)
  rest(){
    this.name2 = "";
    this.correo2 = "";
    this.RFC1 = "";
  }
  //Asigna los valores al editar
  setData(){
    console.log("se borra? xd");
     this.name2;
     this.correo2;
    this.RFC1;
   // darle el valor al .info owo
  }
  borrar(id:number){
    
    console.log("borra >:3");
  
      this.Datos.splice(id,1);

  }
  //Funcion a llamar desde el componente de los botones
  
  ngOnInit(): void {

  }

}
