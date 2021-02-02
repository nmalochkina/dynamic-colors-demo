export class Palette {
  primary: string = getComputedStyle(document.documentElement).getPropertyValue('--primary');
  secondary: string = getComputedStyle(document.documentElement).getPropertyValue('--secondary');
  error: string = getComputedStyle(document.documentElement).getPropertyValue('--error');
}