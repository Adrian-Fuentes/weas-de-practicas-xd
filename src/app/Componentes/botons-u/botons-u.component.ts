import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { FormGroup , FormBuilder, Validators } from "@angular/forms";

import { BuscadoryBotonComponent } from '../buscadory-boton/buscadory-boton.component';


// wea normal
@Component({
  providers:[BuscadoryBotonComponent],
  selector: 'app-botons-u',
  templateUrl: './botons-u.component.html',
  styleUrls: ['./botons-u.component.css']
})
export class BotonsUComponent implements OnInit {
  form: FormGroup;
  showModal: boolean;
  Cnombre: string;
  CRFC: string;
  Ccorreo: string;
  dat1:Array<object> = [];
  name:string;
  rfc: string;
  email:string;
  obj  = {
    id:1,
    name:'',
    rfc:'',
    email:'',
    perfil:''
  }
  mensaje_name:any;
  mensaje_rfc:any;
  mensaje_email:any;
  i=1;
  id:number = 1;
  Perfil = "no";
  
  constructor(private dataservice:DatosService , private built:FormBuilder,private crearP:BuscadoryBotonComponent) {
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

    this.form = built.group({
      name: ['',Validators.compose([
        Validators.required,Validators.minLength(3),
            Validators.pattern('[A-Za-z]*') ])],

       rfc: ['',Validators.compose([
         Validators.required,Validators.maxLength(13),
        Validators.pattern('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$') ])],

       email: ['',Validators.compose([
        Validators.required, Validators.email])],

       
    });
    
   
   }
  //abrir la wea de crear
  show(){
    // obtener datos del perfil (tabla 2)
    this.dat1 = this.dataservice.pasaP;
    console.log("Perfil de la tabla 2:")
    console.log(this.dat1);
   this.dataservice.arr[this.i];
    this.showModal = true;
    
  }
  //cerrar la wea de crear
  hide(){
    this.showModal = false;
   
  }
  usu(){
    this.crearP.crear();
    console.log("entro");
    
  }
  //DECLARA LOS DATOS DE CREAR AL DATA-SERVICE
  resetData(EM:any,RF:any,name1:any){
    
    this.name = this.form.value.name;
    this.rfc = this.form.value.rfc;
    this.email = this.form.value.email;
    console.log("el name es: ");
    console.log(this.name);
    console.log(this.Perfil);
    
    
    
    
     
    console.log("se agrego xd");
    this.dataservice.DatoName = this.obj.name;
    this.dataservice.DatoRFC = this.obj.rfc;
    this.dataservice.DatoCr = this.obj.email;

    this.id = this.dataservice.arr.length +1;
    
    

    // ingresar el objeto al array

    this.dataservice.arr.push({id: this.id, name: this.name, rfc: this.rfc, email: this.email, perfil: this.Perfil}); 
    
    console.log("avr cadenacion xd");
    console.log(this.dataservice.arr2);
    this.dataservice.toTable();
    //Manda a llamar la funcion de la tabla enlazada
   
    console.log("Datos obtenidos en el objeto:");
    console.log( this.obj);
    console.log("id:");
   
    this.obj.id += 1;
    console.log(this.obj.id);
    console.log("que pasa?");
    
    console.log(this.dataservice.arr[this.i])
    this.dataservice.ident = this.id;
    this.i += 1;
    EM.value = "";
    RF.value = "";
    name1.value = "";
    // this.dataservice.DatoP(this.Perfil);
    this.rest(EM,RF,name1);
    this.hide();
    this.Perfil = "no"
    return(this.Perfil);
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.Perfil = event.target.value;
    console.log(this.Perfil);
    if(event.target.value == "Ce"){
      this.usu();
    }else{
      console.log("no paso xd");
      
    }
    
  }

  submitForm(formData: any): void {
    this.form.reset();
    
   
  }
  //AL DARLE CANCELAR RESETEA DATOS DEL NG-MODEL
  rest(EM:any,RF:any,name1:any){
    this.form.value.name = "";
    this.form.value.rfc = "";
    this.form.value.email = "";
  
    EM.value = "";
    RF.value = "";
    name1.value = "";
    this.hide();
  }
  ngOnInit(): void {
  }

}
/*RECORDATORIO
HACER UNA FUNCION QUE ACTIVE EL NGFOR DE LA TABLA CON LOS SIG. DATOS: 
    this.Datos = [
      {
        "id":1, "dat1":this.dataservice.DatoName, "dat2":this.dataservice.DatoRFC, "dat3": this.dataservice.DatoCr
      }
      ]
    this.activa = true;
*/