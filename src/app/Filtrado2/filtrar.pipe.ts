import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any[], arg: string): any[] {
    
    if (arg == '')return value;
    return (value.filter(tate => tate.nande.includes(arg)) )
  }

}
