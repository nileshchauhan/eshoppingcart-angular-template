import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDiscountedPrice]'
})
export class DiscountedPriceDirective {

  @Input('appDiscountedPrice') role: string;
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.color = "green";
  }

}
