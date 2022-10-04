import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective {

  element = document.createElement('div');
  visible = false;

  @Input()
  set tooltip(value) {
    this.element.textContent = value;
  }

  hide(){
    this.element.classList.remove('show-tooltip')
  }
  show(){
    this.element.classList.add('show-tooltip')
  }


  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
    this.element.className = 'tooltip';
    this.elementRef.nativeElement.appendChild(this.element)
    this.elementRef.nativeElement.classList.add('tooltip-container')
  }

}
