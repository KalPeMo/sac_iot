import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideDocument'
})
export class HideDocumentPipe implements PipeTransform {

  transform(value?: string ): string|undefined {
    return value 
      ? value.slice(0, -5) + '*****' 
      : value;
  }

}
