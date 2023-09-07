// eslint-disable-next-line
import { Palette, PaletteColor } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}
