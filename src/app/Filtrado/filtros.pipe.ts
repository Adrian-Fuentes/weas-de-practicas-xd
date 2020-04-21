import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtros'
})
export class FiltrosPipe implements PipeTransform {

  transform(value: any, arg: string): any {
    console.log(arg);

    console.log(value);
    
    if (arg == ''){
    console.log("no se q rollo xd");
      
  }
    return value;
  }

}
