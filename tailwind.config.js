/** @type {import('tailwindcss').Config} */
module.exports = {
  	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			primary: '#2D3031',
			secondary: '#C3CCCE',
			yellow: '#FAC44B',
			darkYellow: '#E8B031',
			green: '#27CF87',
			white: '#FFF',
			red: '#DC143C'
		},
		extend: {
			screens: {
				'2xl': '1440px',
        '3xl': '1600px',
      },
		},
	},
	plugins: [],
}
