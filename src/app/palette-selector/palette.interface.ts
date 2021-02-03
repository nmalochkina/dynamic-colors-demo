const getCssVariable = (key: string) => getComputedStyle(document.documentElement).getPropertyValue(key);

/**
 * Получаем цветовую схему приложения из css-variables
 */
export class AppColorSheme {
  primary = getCssVariable('--primary500');
  secondary = getCssVariable('--secondary500');

  background = getCssVariable('--background');
  error = getCssVariable('--error500');

  onprimary = getCssVariable('--onprimary');
  onsecondary = getCssVariable('--onsecondary');

  onerror = getCssVariable('--onerror');
  
}