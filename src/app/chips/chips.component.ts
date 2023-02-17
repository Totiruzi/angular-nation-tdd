import { Component, OnInit } from '@angular/core';
import { ChipsService } from './chips.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  chips: string[]  = [];
  editing = false;
  editingIndex: number;
  editValue: string;
  pastedList: string;
  listSeparator: string;
  chipName: any;
  constructor(private chipsService: ChipsService) { }

  ngOnInit(): void {
    this.chipsService.chips.subscribe((chips) => (this.chips = [...chips]));
  }

  addChip(value: string) {
    console.log('Value', value);
    this.chipsService.addChip(value);
    this.chipName = '';
  }

  removeChip(index: number) {
    this.chipsService.removeChip(index);
  }
  startEditing(index: number) {
    this.editing = true;
    this.editingIndex = index;
    this.editValue = this.chipsService.getChips()[index];
  }
  saveEditing(index: number) {
    console.log('edited value', this.editValue);
    this.chipsService.editChip(index, this.editValue);
    this.editing = false;
    this.editingIndex = null;
    this.editValue = null;
  }
  cancelEditing() {
    this.editing = false;
    this.editingIndex = null;
    this.editValue = null;
  }

  convertList() {
    if (this.pastedList && this.listSeparator) {
      const chips = this.pastedList.split(this.listSeparator);
      chips.forEach((chip) => this.chipsService.addChip(chip));
    }
  }

}
