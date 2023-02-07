/** @type {import('tailwindcss').Config} */
module.exports = {
  	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			primary: '#2D3031',
			secondary: '#C3CCCE',
			yellow: '#FAC44B',
			green: '#27CF87',
			white: '#FFF'
		},
		extend: {
			screens: {
        '3xl': '1600px',
      },
		},
	},
	plugins: [],
}
