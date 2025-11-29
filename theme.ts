// Color palette based on the logo
export const colors = {
  // Primary colors from logo
  primary: {
    darkBlue: '#1F3044',     // Dark blue from logo
    teal: '#16A085',        // Teal from logo
    orange: '#E67E22',      // Orange from logo
    lightTeal: '#1ABC9C',   // Lighter teal for accents
    lightOrange: '#F39C12', // Lighter orange for accents
  },
  
  // Text colors
  text: {
    light: '#F5F7FA',       // Light text for dark backgrounds
    dark: '#1A202C',        // Dark text for light backgrounds
    muted: '#718096',       // Muted text
  },
  
  // Background colors
  background: {
    light: '#FFFFFF',       // Light mode background
    dark: '#1A1E26',       // Dark mode background (darker than the logo for better contrast)
    darkGradient: 'linear-gradient(135deg, #1A1E26 0%, #242B38 100%)', // Premium dark gradient
  },
  
  // UI colors
  ui: {
    border: 'rgba(255, 255, 255, 0.1)', // Subtle borders
    hover: 'rgba(255, 255, 255, 0.05)', // Hover states
    card: {
      light: '#FFFFFF',
      dark: '#242B38',
    },
  },
  
  // Accent colors
  accent: {
    primary: '#16A085',     // Teal as primary accent
    secondary: '#E67E22',   // Orange as secondary accent
    highlight: '#1ABC9C',   // Lighter teal for highlights
  },
  
  // Button colors
  button: {
    primary: {
      bg: '#16A085',        // Teal
      hover: '#1ABC9C',     // Lighter teal
      text: '#FFFFFF',
    },
    secondary: {
      bg: '#E67E22',        // Orange
      hover: '#F39C12',     // Lighter orange
      text: '#FFFFFF',
    },
  },
};

export const theme = {
  colors,
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Inter", sans-serif',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
  // Add any other theme configurations here
};
