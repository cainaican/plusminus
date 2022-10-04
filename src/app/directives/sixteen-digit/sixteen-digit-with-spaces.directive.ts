import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[sixteen-digits]'
})
export class SixteenDigitWithSpacesDirective {
  //меняет формат введенного текста из 1234567891011121 ==> 1234 5678 9101 1121
  //если вводится буква то срабатывает линт на бордер
  @HostBinding('style.border')
  border: string;

  @HostListener('input', ['$event.target'])
  onKeyDown(e){
    const input = e.value.replace(/\s+/g, '');
    let trimmed = input;

    if(trimmed.length > 16){
      trimmed = trimmed.substring(0, 16)
    }

    let numbers = []
    for(let i = 0; i < trimmed.length; i += 4){
      numbers.push(trimmed.substring(i, i+4))
    }

    e.value = numbers.join(' ')

    this.border = ''

    if(/[^\d]+/.test(trimmed)){
      this.border = '1px solid red'
    }

  }

}
