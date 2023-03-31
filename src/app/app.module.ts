import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChipUpperCasedPipe } from './chip/uppercase.pipe';
import { ChipComponent } from './chip/chip.component';
import { ContainerMinimumChipsErrorDirective } from './chip/container-minimum-chips-error.directive';
import { DimInputOnEditDirective } from './chip/dim-input-on-edit.directive';
import { ContainerMaximumChipsErrorDirective } from './chip/container-maximum-chips-error.directive';
import { CustomChipValidatorDirective } from './chip/custom-chip-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChipComponent,
    ChipUpperCasedPipe,
    ContainerMinimumChipsErrorDirective,
    DimInputOnEditDirective,
    ContainerMaximumChipsErrorDirective,
    CustomChipValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ChipUpperCasedPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
