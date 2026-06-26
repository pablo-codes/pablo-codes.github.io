/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Core design system colors
        "background": "#fff8f1",
        "primary": "#735c00",
        "secondary": "#765749",
        "tertiary": "#4d635f",
        "on-background": "#211b0c",
        "on-surface": "#211b0c",
        "on-surface-variant": "#4d4635",
        "surface-variant": "#ede1c9",
        "surface-container": "#f9edd4",
        "surface-container-low": "#fff2da",
        "surface-container-high": "#f3e7cf",
        "surface-container-highest": "#ede1c9",
        "surface-container-lowest": "#ffffff",
        "outline": "#7f7663",
        "outline-variant": "#d0c5af",
        "secondary-container": "#fed4c2",
        "primary-container": "#d4af37",
        "tertiary-container": "#a0b8b4",
        
        // Named aliases
        "surface-bright": "#fff8f1",
        "surface-dim": "#e5d9c1",
        "surface": "#fff8f1",
        "on-secondary": "#ffffff",
        "on-primary": "#ffffff",
        "on-tertiary": "#ffffff",
        "error": "#ba1a1a",
        
        // Fixed dimensions
        "on-secondary-fixed-variant": "#5c4033",
        "secondary-fixed-dim": "#e6bead",
        "secondary-fixed": "#ffdbcc",
        "on-secondary-fixed": "#2c160b",
        "primary-fixed-dim": "#e9c349",
        "primary-fixed": "#ffe088",
        "on-primary-fixed": "#241a00",
        "on-primary-fixed-variant": "#574500",
        "tertiary-fixed-dim": "#b3cbc7",
        "tertiary-fixed": "#cfe8e3",
        "on-tertiary-fixed": "#091f1c",
        "on-tertiary-fixed-variant": "#354b48",
        
        // Legacy support
        "surface-tint": "#735c00",
        "inverse-surface": "#36301f",
        "inverse-on-surface": "#fcefd7",
        "inverse-primary": "#e9c349",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "unit": "8px",
        "section-gap": "160px",
        "margin-safe": "5vw",
        "content-gap": "24px",
        "asymmetric-offset": "40px",
        "margin-edge": "40px",
        "stack-sm": "12px",
        "stack-md": "24px",
        "stack-lg": "48px",
        "gutter": "24px",
      },
      fontFamily: {
        // Font families from both versions of the design
        "libre": ["Libre Caslon Text", "serif"],
        "garamond": ["EB Garamond", "serif"],
        "literata": ["Literata", "serif"],
        "grotesk": ["Space Grotesk", "sans-serif"],
        "dmsans": ["DM Sans", "sans-serif"],
        
        // Style name mapping used in downloaded HTML classes
        "display-lg": ["Libre Caslon Text", "EB Garamond", "serif"],
        "display-lg-mobile": ["Libre Caslon Text", "EB Garamond", "serif"],
        "headline-md": ["Libre Caslon Text", "EB Garamond", "serif"],
        "headline-sm": ["Libre Caslon Text", "EB Garamond", "serif"],
        "body-lg": ["Literata", "DM Sans", "serif"],
        "body-md": ["Literata", "DM Sans", "serif"],
        "label-caps": ["Space Grotesk", "DM Sans", "sans-serif"],
        "code": ["DM Sans", "monospace"],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'floating': 'floating 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [],
}
