export const tokens = {
  grey: {
    100: '#f0f0f3',
    200: '#e1e2e7',
    300: '#d1d3da',
    400: '#c2c5ce',
    500: '#b3b6c2',
    600: '#8f929b',
    700: '#6b6d74',
    800: '#48494e',
    900: '#242427'
  },
  primary: {
    // Gold
    100: '#fbf1d1',
    200: '#f7e2a3',
    300: '#f4d474',
    400: '#f0c546',
    500: '#ecb718',
    600: '#bd9213',
    700: '#8e6e0e',
    800: '#5e490a',
    900: '#2f2505'
  },
  secondary: {
    // Indigo
    100: '#d1dbfb',
    200: '#a3b8f8',
    300: '#7494f4',
    400: '#4671f1',
    500: '#184ded',
    600: '#133ebe',
    700: '#0e2e8e',
    800: '#0a1f5f',
    900: '#050f2f'
  },
  tertiary: {
    // purple
    500: '#8884d8'
  },
  background: {
    light: '#2d2d34',
    main: '#1f2026'
  }
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400]
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500]
    },
    tertiary: {
      ...tokens.tertiary
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500]
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light
    }
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 32
    },
    h2: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 24
    },
    h3: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200]
    },
    h4: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300]
    },
    h5: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500]
    },
    h6: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 10,
      color: tokens.grey[700]
    }
  }
};
