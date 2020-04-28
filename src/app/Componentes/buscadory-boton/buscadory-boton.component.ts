//owo
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { FormGroup , FormBuilder, Validators, FormControl} from "@angular/forms";
import {requireCheckboxesToBeCheckedValidator} from "./require-checkboxes-to-be-checked.validator"
import { debounceTime } from 'rxjs/operators';
@Component({
  providers:[DatosService],
  selector: 'app-buscadory-boton',
  templateUrl: './buscadory-boton.component.html',
  styleUrls: ['./buscadory-boton.component.css']
})
export class BuscadoryBotonComponent implements OnInit {
id : any;
showModall1:boolean;
name:string;
Datitos = {
  nande: '',
  Fecha: 'GDFN123654IO7'
}
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
  
 
Guardar(na:any){
  console.log("avr");
  
console.log(na.value);

  this.id = this.servicio.pasaP.length +1;
this.servicio.pasaP.push({id:this.id , nande: na.value, Fecha:'GDFN123654IO7',che1: this.Check1 ,che2: this.Check2 ,che3: this.Check3 ,che4: this.Check4 ,che5: this.Check5 ,che6: this.Check6 ,che7: this.Check7});
console.log(this.Datitos);
this.servicio.paso();
}
crear(){
  this.showModall1 = true;
}
quitar(){
this.showModall1 = false;
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

submitForm(formData: any): void {
  this.form3.reset();
}
  ngOnInit(): void {
    this.Buscas.valueChanges.pipe( debounceTime(300) ).subscribe(value => this.PasadoD.emit(value));
  }
   Buscas = new FormControl('');
    @Output('Buscas') PasadoD = new EventEmitter<string>();


}
//h
