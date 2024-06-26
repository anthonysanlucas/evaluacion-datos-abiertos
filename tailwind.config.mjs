/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ' "./node_modules/flowbite/**/*.js"'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#146A8C',
        'primary-text': '#001B2E',
        'secondary-text': '#4C5F6C',
        'custom-orange': '#41CAD9',
        'custom-yellow': '#F8D45C',
        'blue-accent': '#115C84'
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif']
      },
      animation: {
        'background-shine': 'background-shine 2s linear infinite',
        'border-width': 'border-width 3s infinite alternate'
      },
      keyframes: {
        'background-shine': {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        },
        'border-width': {
          from: {
            width: '10px',
            opacity: '0'
          },
          to: {
            width: '100px',
            opacity: '1'
          }
        }
      }
    }
  },

  plugins: [require('flowbite/plugin')]
}
