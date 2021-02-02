import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiExampleComponent } from './material-ui-example/material-ui-example.component';
import { PaletteSelectorComponent } from './palette-selector/palette-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialUiExampleComponent,
    PaletteSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
