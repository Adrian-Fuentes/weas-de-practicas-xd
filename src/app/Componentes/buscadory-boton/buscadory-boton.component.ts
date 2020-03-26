import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { FormGroup , FormBuilder, Validators, FormControl} from "@angular/forms";
import {requireCheckboxesToBeCheckedValidator} from "./require-checkboxes-to-be-checked.validator"

@Component({
  selector: 'app-buscadory-boton',
  templateUrl: './buscadory-boton.component.html',
  styleUrls: ['./buscadory-boton.component.css']
})
export class BuscadoryBotonComponent implements OnInit {
id : any;
showModall:boolean;
name:string;
Datitos = {
  nande: '',
  Fecha: 'GDFN123654IO7'
}
/*
checado1 = false;
checado2 = false;
checado3 = false;
checado4 = false;
checado5 = false;
checado6 = false;
checado7 = false;
*/
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
mensaje_name:any;

  constructor(public servicio: DatosService,private fb:FormBuilder) { 
    this.mensaje_name = {
      'name': [
        { type: 'required', message: 'El nombre es Requerido*' },
        { type: 'minlength', message: 'Minimo 3 letras*'},
        { type: 'pattern', message: 'Solo se aceptan letras*' }
      ]}


  /*  this.form3 = fb.group({
      name: ['',Validators.compose([
        Validators.required,Validators.minLength(3),
            Validators.pattern('[A-Za-z]*') ])]
            })
*/
//se crea un formgroup para las validaciones
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
            //funcion que llama un .ts que hace la validacion de un grupo
            },requireCheckboxesToBeCheckedValidator()),
            //seccion del segundo grupo de checks
            chequeos2: new FormGroup({
            checado5: new FormControl(false),
            checado6: new FormControl(false),
            checado7: new FormControl(false)
            //misma funcion para comprobar comoa arriba xD
          },requireCheckboxesToBeCheckedValidator())
            })
    
  }
  
 
Guardar(na:any){
  console.log("avr");
  
console.log(na.value);

  this.id = this.servicio.pasaP.length +1;
this.servicio.pasaP.push({id:this.id , nande: na.value, Fecha:'GDFN123654IO7'});
console.log(this.Datitos);
this.servicio.paso();
}
crear(){
  this.showModall = true;
}
quitar(){
this.showModall = false;
}
RegresarD(){

}

submitForm(formData: any): void {
  this.form3.reset();
}
  ngOnInit(): void {
  }

}
