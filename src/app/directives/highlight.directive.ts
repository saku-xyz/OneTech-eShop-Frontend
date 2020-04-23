import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appSetColor]'
})
export class HighlightDirective {

  constructor(private el: ElementRef,private renderer: Renderer) {
    // el.nativeElement.style. = 'yellow';
    renderer.setElementStyle(el.nativeElement, 'color', '#EEBA33');
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.setFontColor('green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontColor(null);
  }

  private setFontColor(color: string) {
    // this.el.nativeElement.style.backgroundColor = color;
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  }

}
