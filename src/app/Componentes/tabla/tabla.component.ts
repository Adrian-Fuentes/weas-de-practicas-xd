import { Component, OnInit, Output, Host } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { FormGroup , Validators, FormBuilder, FormControl} from '@angular/forms';
import {requireCheckboxesToBeCheckedValidator} from './require-checkboxes-to-be-checked.validator'

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  
})
export class TablaComponent implements OnInit {
  TPer: string;
  showModal: boolean;
  name:any;
  Per: string;
  Per1: string;
  profiles: Array<object> = [];
  datoss: any;
  ValueDado:string;
  form4:FormGroup
  grupo1:any;
  grupo2:any;
  mensaje_name:any;
  owo:boolean = false;

  checkeo1 = false;
  checkeo2 = false;
  checkeo3 = false;
  checkeo4 = false;
  checkeo5 = false;
  checkeo6 = false;
  checkeo7 = false;
  constructor(public ElService: DatosService) { 
    this.ValueDado = this.ElService._Dato;
    this.Per = "Aprobado"
    this.profiles = this.ElService.pasaP;

    this.mensaje_name = {
      'name': [
        { type: 'required', message: 'El nombre es Requerido*' },
        { type: 'minlength', message: 'Minimo 3 letras*'},
        { type: 'pattern', message: 'Solo se aceptan letras*' }
      ]}

    this.form4 = new FormGroup({
      //se secciona por validacion (esta es del name)
      name: new FormControl('',[Validators.compose([
        Validators.required,Validators.minLength(3),
    Validators.pattern('[A-Za-z]*')]) ]),
        //Seccion del primer grupo de checks
    grupo1:  new FormGroup({
      checar1: new FormControl(false),
      checar2: new FormControl(false),
      checar3: new FormControl(false),
      checar4: new FormControl(false),
    //funcion que llama un .ts que hace la validacion de un grupo
    },requireCheckboxesToBeCheckedValidator()),
    //seccion del segundo grupo de checks
    grupo2: new FormGroup({
      checar5: new FormControl(false),
      checar6: new FormControl(false),
      checar7: new FormControl(false)
    //misma funcion para comprobar comoa arriba xD
  },requireCheckboxesToBeCheckedValidator())
    })
   
  }
  //Para borrar
  avr(id:number){
    console.log("si pasa xd")
    console.log(id);
    
    this.ElService.pasaP.splice(id,1);
    
    
  }
  //MOSTRAR EL EDITADO
  show(id:any){
    this.showModal = true;
    console.log("si pasa xd")
    console.log(id);
    this.datoss = this.ElService.pasaP.find(resul => resul.id === id+1);
    console.log(this.datoss);

    this.checkeo1 = this.datoss.che1;
    this.checkeo2 = this.datoss.che2; 
    this.checkeo3 = this.datoss.che3; 
    this.checkeo4 = this.datoss.che4; 
    this.checkeo5 = this.datoss.che5; 
    this.checkeo6 = this.datoss.che6; 
    this.checkeo7 = this.datoss.che7;  
    this.name = this.datoss.nande;
    return(this.datoss);
    
  }
  //CERRAR EL EDITADO
  hide(){
    this.showModal = false;
  }
  //AL DAR CANCELAR (EDITADO)
  quita(){
    this.Per1 = ""
    //se activa el checkbox
   this.owo = true;
   
    
    
    
  }
  //AL DAR GUARDAR (EDITADO)
  setData1(){
    console.log("aqui xd");
    this.Per = this.Per1;
    this.datoss.che1 = this.checkeo1;
    this.datoss.che2 = this.checkeo2; 
    this.datoss.che3 = this.checkeo3; 
    this.datoss.che4 = this.checkeo4; 
    this.datoss.che5 = this.checkeo5; 
    this.datoss.che6 = this.checkeo6; 
    this.datoss.che7 = this.checkeo7; 
    this.datoss.nande = this.name;

  }
  submitForm(formData: any): void {
    this.form4.reset();
  }
  ngOnInit(): void {
    this.ElService.Cambio$.subscribe(Valor => {
      console.log("se paso el sigueinte valor para comprobar:");
      
      console.log(Valor);
      
      if(Valor != ""){
        this.ValueDado = Valor;
      }else{
        this.ValueDado = '';
      }

    })
  }


}
