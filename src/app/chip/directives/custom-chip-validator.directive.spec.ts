import { ChipComponent } from './chip.component';
import { ChipService } from './chip.service';
import { CustomChipValidatorDirective } from './custom-chip-validator.directive';

describe('CustomChipValidatorDirective', () => {
  let chipComponent: ChipComponent;
  let chipService: ChipService;

  beforeEach(() => {
    chipService = new ChipService();
    chipComponent = new ChipComponent(chipService);
  })
  it('should create an instance', () => {
    const directive = new CustomChipValidatorDirective(chipComponent);
    expect(directive).toBeTruthy();
  });
});
