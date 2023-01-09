module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/react-tailwind-table/**/*.js"
    ],
    theme: {
        screens: {
            sm: '560px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1280px',
        },

        container: {
            center: true,
            padding: {
                xl: '20px',
                DEFAULT: '16px',
            },
        },

        extend: {
            colors: {
                primary: '#c2000d',
                secondary: '#0903ac',
                dark: "#171717"
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                montserrat: ['Montserrat', 'snas-serif']
            },
            boxShadow: {
                small: '0px 2px 20px rgba(0, 0, 0, 0.03)',
            },
            letterSpacing: {
                primary: '0.01em',
            },
            backgroundImage: { 
                'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))', 
                'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))', 
                'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))', 
                'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))', 
                'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))', 
                'gradient-radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))', 
                'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))', 
                'gradient-radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))', 
                'gradient-radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))', 
            }, 
        },
    },
    plugins: [],
};
