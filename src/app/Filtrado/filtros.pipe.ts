import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtros'
})
export class FiltrosPipe implements PipeTransform {

  transform(value: any[], arg: string): any[]{
    console.log(arg);

    console.log(value);
    if(arg == '') return (value);

    return (value.filter(item => item.name.includes(arg)) )
  }

}
