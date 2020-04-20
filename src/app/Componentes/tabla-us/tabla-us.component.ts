import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

import { FormGroup , FormBuilder, Validators,FormControl } from "@angular/forms";
import {requireCheckboxesToBeCheckedValidator} from "../buscadory-boton/require-checkboxes-to-be-checked.validator"


@Component({
  
  selector: 'app-tabla-us',
  templateUrl: './tabla-us.component.html',
  styleUrls: ['./tabla-us.component.css']
})
export class TablaUsComponent implements OnInit {
  Sefiltra:any;


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
  wea1: any;
  form1:FormGroup
  mensaje_name:any;
  mensaje_rfc:any;
  mensaje_email:any;
  Perfil1 = 'no';
  dat:any;
  //crear perfil
  
  Check1 = false;
  Check2 = false;
  Check3 = false;
  Check4 = false;
  Check5 = false;
  Check6 = false;
  Check7 = false;
  form3:FormGroup;
  Datitos = {
    nande: '',
    Fecha: 'GDFN123654IO7'
  }
  Perfiless:any;
  CreP:any;
  showModall1:Boolean = false;
  id:number;
  constructor(public dataservice: DatosService, private fb:FormBuilder) {
    // Se declara los valores del arr para activar el NgFor
    this.dat = this.dataservice.pasaP;

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
        Validators.required, Validators.email])],
        Perfiless: new FormGroup({
          Cambios2: new FormControl()
        })
    });
    //PARTE DEL CREAR PERFILES----------------------------------------------------------------------------------------------------------------------
    this.form3 = new FormGroup({
      //se secciona por validacion (esta es del name)
      name: new FormControl('',[Validators.compose([
        Validators.required,Validators.minLength(3),
    Validators.pattern('[A-Za-z]*')]) ]),
        //Seccion del primer grupo de checks
    chequeos:  new FormGroup({
    checado1: new FormControl(false),
    checado2: new FormControl(false),
    checado3: new FormControl(false),
    checado4: new FormControl(false),
    checado5: new FormControl(false),
    checado6: new FormControl(false),
    checado7: new FormControl(false)
    //funcion que llama un .ts que hace la validacion de un grupo
    },requireCheckboxesToBeCheckedValidator()),
    })
    
  }
    
    //TERMINA xD------------------------------------------------------------------------------------------------------------------------------------

   //avr -----------------------------------------------------
      


   //sin vr ---------------------------------------------------
  
   //MUESTRA EL POP-UP
  show(id:number,Name:any,RFC:any,Email:any){
    this.dat = this.dataservice.pasaP;
    
    console.log("El id es: ");
    console.log(id);

    this.info = this.dataservice.arr.find(resul => resul.id === id+1);
    console.log(this.info);
    Name.value = this.info.name;
    RFC.value = this.info.rfc;
    Email.value = this.info.email;
    
    this.CreP = this.info.perfil;
    
    
    console.log("entro");
    console.log(this.CreP);
    console.log(
     this.info.perfil);
     this.showModal = true;
    return(this.info,this.CreP);
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
     this.info.perfil = this.CreP;
     
   // darle el valor al .info owo
    
  }
  submitForm(formData: any): void {
    this.form1.reset();
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.CreP = event.target.value;
    console.log("El option es:");
    
    console.log(this.CreP);
    if (this.CreP == "Crea"){
      console.log("si agarro xd");
      this.crear()
      
    }
    
  }
  borrar(id:number){
    
    console.log("borra >:3");
  
      this.Datos.splice(id,1);

  }
  //Funcion a llamar desde el componente de los botones
  prender(){
    this.crear();
    console.log("Se activo");
    
  }
  ngOnInit(): void {

  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
// PARTE DEL CREAR PERFILES ----------------------------------------------------------------------------------------------------------------------
Guardar(na:any){
  console.log("avr");
  
console.log(na.value);

  this.id = this.dataservice.pasaP.length +1;
this.dataservice.pasaP.push({id:this.id , nande: na.value, Fecha:'GDFN123654IO7',che1: this.Check1 ,che2: this.Check2 ,che3: this.Check3 ,che4: this.Check4 ,che5: this.Check5 ,che6: this.Check6 ,che7: this.Check7});
console.log(this.Datitos);
this.dataservice.paso();
this.Perfil1 = na.value;
this.CreP = na.value;
}

crear(){
  this.showModall1 = true;
}

quitar(){
  this.showModall1 = false;
  
 
 //na.value = "";

  }
  submitForm1(formData: any): void {
    this.form3.reset();
  }
  RegresarD(na:any){
    this.Check1 = false;
    this.Check2 = false;
    this.Check3 = false;
    this.Check4 = false;
    this.Check5 = false;
    this.Check6 = false;
    this.Check7 = false;
    na.value = "";
  }
}
