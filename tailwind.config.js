/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        base: 'linear-gradient(90deg, rgba(18,0,36,1) 0%, rgba(233,0,231,1) 50%, rgba(116,0,255,1) 100%)',
        'background': "url('/wallpaper.png')",
        'home': "url('/ELEMENTOS-HOME.png')",
        'background-botao': "url('/SaturnButton.png')"
      }
    },
  },
  plugins: [],
}
