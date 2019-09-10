import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountCalculator'
})
export class DiscountCalculatorPipe implements PipeTransform {

  transform(value: number, discount: number): number {
    let originalPrice: number = value;
    let percentage: number = isNaN(discount) ? 0 : discount;
    return originalPrice - (originalPrice * percentage / 100);
  }

}
