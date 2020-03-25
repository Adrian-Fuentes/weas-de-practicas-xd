import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { FormGroup , FormBuilder, Validators, FormControl} from "@angular/forms";


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
bloqueo1 = false;
bloqueo2 = false;
bloqueo3 = false;
bloqueo4 = false;

bloq1 = false;
bloq2 = false;
bloq3 = false;
form:FormGroup;


  constructor(public servicio: DatosService,private fb:FormBuilder) { 
    this.form = fb.group({
      name: ['',Validators.compose([
        Validators.required,Validators.minLength(3),
            Validators.pattern('[A-Za-z]*') ])],
        chequeos: new FormGroup({
          checado1: new FormControl(false),
          checado2: new FormControl(false),
          checado3: new FormControl(false),
          checado4: new FormControl(false)
        }),
        chequeos2: new FormGroup({
          checado5: new FormControl(false),
          checado6: new FormControl(false),
          checado7: new FormControl(false)
        })

    })
  }
 
Guardar(){

  this.id = this.servicio.pasaP.length +1;
this.servicio.pasaP.push({id:this.id , nande:this.name, Fecha:'GDFN123654IO7'});
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
  ngOnInit(): void {
  }

}
