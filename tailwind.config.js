/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#007ced',
                    50: '#e6f4ff',
                    100: '#bae0ff',
                    200: '#91caff',
                    300: '#69b1ff',
                    400: '#4096ff',
                    500: '#007ced',
                    600: '#0058b3',
                    700: '#003d7a',
                    800: '#002766',
                    900: '#001d4d',
                },
                accent: {
                    DEFAULT: '#4da3ff',
                    light: '#80bdff',
                    dark: '#1a8cff',
                },
                gray: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                heading: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in-down': 'fadeInDown 0.6s ease-out',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'bounce-slow': 'bounce 3s infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            boxShadow: {
                'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
                'medium': '0 4px 20px rgba(0, 0, 0, 0.12)',
                'hard': '0 8px 30px rgba(0, 0, 0, 0.15)',
                'glow': '0 0 20px rgba(0, 124, 237, 0.3)',
                'glow-strong': '0 0 30px rgba(0, 124, 237, 0.5)',
            },
            backdropBlur: {
                xs: '2px',
            }
        },
    },
    plugins: [],
}
