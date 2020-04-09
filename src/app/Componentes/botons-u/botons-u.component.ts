import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { FormGroup , FormBuilder, Validators, FormControl } from "@angular/forms";
import { BuscadoryBotonComponent } from '../buscadory-boton/buscadory-boton.component';
import {requireCheckboxesToBeCheckedValidator} from "../buscadory-boton/require-checkboxes-to-be-checked.validator"

// wea normal
@Component({
  providers:[BuscadoryBotonComponent],
  selector: 'app-botons-u',
  templateUrl: './botons-u.component.html',
  styleUrls: ['./botons-u.component.css']
})
export class BotonsUComponent implements OnInit {
  //datos de ests componente
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
  //Datos del componente de crear perfiles
  Check1 = false;
Check2 = false;
Check3 = false;
Check4 = false;
Check5 = false;
Check6 = false;
Check7 = false;
chequeos:any;
chequeos2:any;
bloqueo1 = false;
bloqueo2 = false;
bloqueo3 = false;
bloqueo4 = false;

bloq1 = false;
bloq2 = false;
bloq3 = false;
form3:FormGroup;
mensaje_name1:any;
showModall1:boolean;
CambiaP:any;
Datitos = {
  nande: '',
  Fecha: 'GDFN123654IO7'
}
weaD:any;
  
  constructor(private dataservice:DatosService , private built:FormBuilder,private crearP:BuscadoryBotonComponent) {
    this.Perfil;
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
    //seccion del segundo grupo de checks
    /*
    chequeos2: new FormGroup({
    checado5: new FormControl(false),
    checado6: new FormControl(false),
    checado7: new FormControl(false)
    //misma funcion para comprobar comoa arriba xD
    },requireCheckboxesToBeCheckedValidator())
  */});
    
  }
    
    //TERMINA xD------------------------------------------------------------------------------------------------------------------------------------
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
    this.crear();
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
    //Este es al guardar el usuario (no afecta)
    this.Perfil = "no";
    return(this.Perfil);
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.Perfil = event.target.value;
    console.log(this.Perfil);
    
    if(event.target.value == "Ce"){
      this.usu();
    }else{
      console.log("no paso xd (bien)");
      
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

  /*RECORDATORIO
  HACER UNA FUNCION QUE ACTIVE EL NGFOR DE LA TABLA CON LOS SIG. DATOS: 
  this.Datos = [
    {
      "id":1, "dat1":this.dataservice.DatoName, "dat2":this.dataservice.DatoRFC, "dat3": this.dataservice.DatoCr
    }
  ]
  this.activa = true;
  */
 // PARTE DEL CREAR PERFILES ----------------------------------------------------------------------------------------------------------------------
 Guardar(na:any,F:any){
  console.log("avr");
  
  
  
console.log(na.value);

  this.id = this.dataservice.pasaP.length +1;
this.dataservice.pasaP.push({id:this.id , nande: na.value, Fecha:'GDFN123654IO7',che1: this.Check1 ,che2: this.Check2 ,che3: this.Check3 ,che4: this.Check4 ,che5: this.Check5 ,che6: this.Check6 ,che7: this.Check7});
console.log(this.Datitos);
this.dataservice.paso();

this.Perfil = na.value;
console.log("el nambre es:");
console.log(this.Perfil);

console.log("los datos son:");
console.log(this.weaD);
console.log("el valor es:" );
console.log(F.value);
//Detecta el valor esta en crear, PERO imprime el de elegir.... :s
F.value = this.Perfil;
//no se aplica el cambio???
console.log(F.value);
//no imprime ningun valor ):






this.quitar();

}
quitar2(){
  this.showModall1 = false;
}
crear(){
  this.showModall1 = true;
}

quitar(){
  this.showModall1 = false;
  this.weaD = this.dataservice.pasaP.find(resul => resul.id === this.id);
console.log("los datos son:");
console.log(this.weaD);
this.Perfil = this.weaD.nande;
//Si me da el perfil pero no se coloca en el select :/
console.log(this.Perfil);
 
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