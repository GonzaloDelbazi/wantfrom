import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: string): string {
    
    if(value) {

      return value;
    }else{

      return '../assets/img/no-image.png';
    }
  }

}
