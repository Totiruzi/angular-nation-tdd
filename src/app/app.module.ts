import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChipUpperCasedPipe } from './chip/uppercase.pipe';
import { ChipComponent } from './chip/chip.component';
import { ColorDirective } from './chip/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChipComponent,
    ChipUpperCasedPipe,
    ColorDirective
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
