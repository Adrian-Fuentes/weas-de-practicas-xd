import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    
    const ResultadoF = [];
    for(const item of value){
      if (item.name.indexOf(arg) > -1 ){
     
      console.log("si jala xd");
      }else{
        console.log("Algo hiciste mal xd");
        ResultadoF.push(item);
        
      }
    }
    return ResultadoF;
}   
}
