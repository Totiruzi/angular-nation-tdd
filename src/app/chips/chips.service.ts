import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChipsService {
  private _chips: string[] = [];
  chips = new BehaviorSubject<string[]>([]);

  constructor() { }

  addChip(chip: string) {
    this._chips.push(chip);
    this.chips.next(this._chips);
  }
 
  getChips() {
    return this._chips;
  }

  removeChip(index: number) {
    this._chips.splice(index, 1);
    this.chips.next(this._chips);
  }

  editChip(index: number, newValue: string) {
    console.log('EDIT CHIP', index, newValue, this._chips[index]);
    this._chips[index] = newValue;
    this.chips.next(this._chips);
  }

}
