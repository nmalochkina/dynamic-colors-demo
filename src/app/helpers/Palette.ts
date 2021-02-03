import { hexToRGB } from "./hexToRGB";
import { RGBToHSL } from "./RGBtoHLS";

const mainPaletteKeys: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const additionalPaletteKeys: number[] = [100, 200, 400, 700];

const getHLSstring = (h: number, s: number, l: number) => `hsl(${h},${s}%,${l}%)`;

class PaletteBase {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
};

export class Palette extends PaletteBase {
  constructor(color: string) {
    super();

    const rgbColor = color.startsWith('rgb') ? color : hexToRGB(color);
    const hslColor = RGBToHSL(rgbColor);

    let sep = hslColor.indexOf(",") > -1 ? "," : " ";
    let hlsArr = hslColor.substr(4).split(")")[0].split(sep);

    const h = Number.parseInt(hlsArr[0], 10);
    const s = Number.parseInt(hlsArr[1].replace('%', ''), 10);
    let l = Number.parseInt(hlsArr[2].replace('%', ''), 10);

    const step = Math.min(l, (100 - l)) / 4;

    /**
     * Основные цвета палитры (50-900) генерим изменяя яркость цвета
     */
    mainPaletteKeys.forEach((key: number) => {
      const shift = (key - 500)/100;
      const lightness = l - shift * step;
      this[key] = getHLSstring(h, s, lightness);
    });

    /**
     * Для цветов A100 - A700 должен быть какой-то другой алгоритм
     * это пока как временное решение
     */
    additionalPaletteKeys.forEach((key: number) => {
      const shift = (key - 500)/100;
      const lightness = l - shift * step;
      this['A' + key] = getHLSstring(h, s, lightness);
    });
  }
}
