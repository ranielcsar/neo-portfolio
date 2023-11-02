/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme=dark]'],
  theme: {
    extend: {
      maxWidth: {
        'max-allowed': '75%'
      },
      colors: {
        black: 'rgb(var(--black) / <alpha-value>)',
        white: 'rgb(var(--white) / <alpha-value>)',
        mint: 'rgb(var(--mint) / <alpha-value>)',
        'pale-blue': 'rgb(var(--pale-blue) / <alpha-value>)',
        'electric-blue': 'rgb(var(--electric-blue) / <alpha-value>)',
        water: 'rgb(var(--water) / <alpha-value>)',
        lime: 'rgb(var(--lime) / <alpha-value>)',
        yellow: 'rgb(var(--yellow) / <alpha-value>)'
      },
      fontFamily: {
        grotesk: ['SpaceGrotesk', 'sans-serif'],
        roboto: ['Roboto Mono', 'sans-serif']
      },
      boxShadow: {
        'neo-sm': '4px 4px 0 rgb(var(--black))',
        'neo-md': '6px 6px 0 rgb(var(--black))',
        'neo-lg': '8px 8px 0 rgb(var(--black))'
      }
    }
  },
  plugins: []
}
