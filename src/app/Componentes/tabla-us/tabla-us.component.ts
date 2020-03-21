import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { BotonsUComponent } from '../botons-u/botons-u.component';
import { FormGroup , FormBuilder, Validators } from "@angular/forms";



@Component({
  providers:[BotonsUComponent],
  selector: 'app-tabla-us',
  templateUrl: './tabla-us.component.html',
  styleUrls: ['./tabla-us.component.css']
})
export class TablaUsComponent implements OnInit {
  showModal: boolean;
  name: string; 
  rfc:any;
  email:string;
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
  form1:FormGroup
  mensaje_name:any;
  mensaje_rfc:any;
  mensaje_email:any;
  constructor(public dataservice: DatosService, public botons:BotonsUComponent,private fb:FormBuilder) {
    // Se declara los valores del arr para activar el NgFor
    this.Datos = this.dataservice.arr;
    console.log(this.Datos);
    this.mensaje_name = {
      'name': [
        { type: 'required', message: 'El nombre es Requerido*' },
        { type: 'minlength', message: 'Minimo 3 letras*'},
        { type: 'pattern', message: 'Solo se aceptan letras*' }
      ]}

      this.mensaje_rfc = {
        'rfc': [
          { type: 'required', message: 'El rfc es Requerido*' },
          { type: 'maxlength', message: 'Son Máximo 13 caracteres*' },
          { type: 'pattern', message: 'Formato Invalido*'}
        ]}

      this.mensaje_email = {
        'email': [
          { type: 'required', message: 'El email es Requerido*' },
          { type: 'email', message: 'Agrega un formato valido*'}
        ]}  

    this.form1 = fb.group({
      name: ['',Validators.compose([
        Validators.required,Validators.minLength(3),
            Validators.pattern('[A-Za-z]*') ])],

       rfc: ['',Validators.compose([
         Validators.required,Validators.maxLength(13),
        Validators.pattern('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$') ])],

       email: ['',Validators.compose([
        Validators.required, Validators.email])]
    });


   }
  
   //MUESTRA EL POP-UP
  show(id:number,Name:any,RFC:any,Email:any){
    this.showModal = true;
    console.log("El id es: ");
    console.log(id);

    this.info = this.dataservice.arr.find(resul => resul.id === id+1);
    console.log(this.info);
    Name.value = this.info.name;
    RFC.value = this.info.rfc;
    Email.value = this.info.email;
    
    return(this.info);
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
  setData(Name:any,RFC:any,Email:any){
    console.log("se borra? xd");
     this.info.name = Name.value;
     this.info.rfc = RFC.value;
     this.info.email = Email.value;
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
