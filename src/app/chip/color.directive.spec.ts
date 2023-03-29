import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipComponent } from './chip.component';
import { ContainerMinimumChipsErrorDirective } from './color.directive';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ColorDirective', () => {
  let component = ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;
  let el: DebugElement;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipComponent, ContainerMinimumChipsErrorDirective]
    })

    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  }))
  it('should create an instance', () => {
    let mockElRef = { nativeElement: document.createElement('div')};
    const directive = new ContainerMinimumChipsErrorDirective(mockElRef);
    expect(directive).toBeTruthy();
  });

  it('should change the border color when chip less than or equall to 3', () => {
    let container = el.queryAll(By.css('#chip'));
    let firstContainer = container[0];
    firstContainer.triggerEventHandler('mouseclick', {});
    fixture.detectChanges();
    expect(firstContainer.nativeElement.style.border).toBe('red');
  })

  it('shoul change the input border color on edit mode', () => {})
});
