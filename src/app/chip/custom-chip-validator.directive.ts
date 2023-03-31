import { ChipService } from './chip.service';
import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[chipCountValidator]'
})
export class CustomChipValidatorDirective {
  @Input('customChipValidator') minChips: number = 3;
  @Input('customChipValidator') maxChips: number = 7;

  
  constructor(private chipService: ChipService, private elRef: ElementRef) { }

  ngOnInit(): void {
    this.chipService. validateChipsCount(this.minChips, this.maxChips);
  }

}
