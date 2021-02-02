import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Palette } from './palette.interface';

@Component({
  selector: 'app-palette-selector',
  templateUrl: './palette-selector.component.html',
  styleUrls: ['./palette-selector.component.scss']
})
export class PaletteSelectorComponent implements OnInit {

  palette = new Palette();
  paletteForm = new FormGroup({});

  constructor() {
    Object.keys(this.palette).forEach(key => {
      this.paletteForm.addControl(key, new FormControl(this.palette[key]));
    });
  }

  ngOnInit(): void {
    
  }

  applyTheme() {
    Object.keys(this.palette).forEach(key => {
      const color = this.paletteForm.get(key).value;
      document.documentElement.style.setProperty(`--${key}`, color);
    });
  }

}
