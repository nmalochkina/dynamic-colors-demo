import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Palette } from '../helpers/Palette';
import { AppColorSheme } from './palette.interface';

/**
 * Компонент для выбора цветовой схемы приложения
 * Ориентировалась на https://material.io/design/color/the-color-system.html#color-theme-creation
 */
@Component({
  selector: 'app-palette-selector',
  templateUrl: './palette-selector.component.html',
  styleUrls: ['./palette-selector.component.scss']
})
export class PaletteSelectorComponent {

  private colorSheme = new AppColorSheme();
  colorForm = new FormGroup({});

  constructor() {
    /**
     * Создаем контролы для формы с цветовой схемой
     */
    Object.keys(this.colorSheme).forEach(key => {
      this.colorForm.addControl(key, new FormControl(this.colorSheme[key]));
    });
  }

  /**
   * Применяем новую тему
   * Сейчас работает только для цветов в hex и rgb
   */
  applyTheme() {
    Object.keys(this.colorSheme).forEach(shemeKey => {
      const color = this.getColor(shemeKey).trim();

      if (['primary', 'secondary', 'error'].includes(shemeKey)) {
        // для этих ключей генерим material-палитру
        const palette = new Palette(color);
        Object.entries(palette).forEach(([paletteKey, paletteColor]) => {
          document.documentElement.style.setProperty(`--${shemeKey}${paletteKey}`, paletteColor);
        });
      } else {
        // для остальных используется только один цвет
        document.documentElement.style.setProperty(`--${shemeKey}`, color);
      }
    });
  }

  getControl(key: string) {
    return this.colorForm.get(key);
  }
  getColor(key: string) {
    return this.colorForm.get(key).value;
  }
}
