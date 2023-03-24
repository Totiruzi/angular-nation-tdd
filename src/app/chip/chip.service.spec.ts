import { Chip, ChipService } from './chip.service';

describe('ChipService', () => {
  let chipService: ChipService;
  let chips: Array<Chip> = [];

  beforeEach(() => {
    chipService = new ChipService();
    chips = chipService.getChips()
  });

  it('1. should be created', () => {
    expect(chipService).toBeTruthy();
  });

  it('2. should add a chip', () => {
    chipService.addChip('Mike');
    chips = chipService.getChips();
    let lastChipIndex = chips.length - 1;
    expect(chips.length).toBe(7);
    expect(chips[lastChipIndex]).toEqual({
      id: lastChipIndex + 1,
      label: 'Mike',
    });
  });

  it('3. should edit a chip', () => {
    // const chipService: ChipService = TestBed.get(ChipService);
    chipService.addChip('Mike');
    chips = chipService.getChips();
    console.log("🚀 ~ file: chip.service.spec.ts:29 ~ it ~ chips:", chips)
    let findChipMike: number = chips.findIndex((chip) => chip.label == 'Mike');
    if (findChipMike > -1) {
      let editedLabel: string = 'Michael';
      chipService.editChip(findChipMike, editedLabel);
      chips = chipService.getChips();
    }
    
    let chipsLength = chips.length;
    expect(chips.length).toBe(chipsLength);
    expect(chips[findChipMike].label).toBe('Michael');
  });

  it('4. should remove a chip', () => {
    // const chipService: ChipService = TestBed.get(ChipService);
    chipService.addChip('Mike');
    chipService.removeChip(0);
    chips = chipService.getChips();
    let chipsLength = chips.length;
    expect(chips.length).toBe(chipsLength);
  });
});
