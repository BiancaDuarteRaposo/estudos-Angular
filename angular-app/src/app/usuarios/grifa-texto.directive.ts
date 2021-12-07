import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[grifaTexto]',
})
export class GrifaTextoDirective {
  @HostListener('mouseover')
  onMouseover() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    console.log('mouse over');
  }
  @HostListener('mouseout')
  onMouseOut() {
    console.log('mouse out');
    this.el.nativeElement.style.backgroundColor = 'white';
  }

  constructor(private el: ElementRef) {}
}
