/** @type {import('tailwindcss').Config} */
const config = {
  content:[
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
        saabhi:{
            green:{
                primary:'#2d5016',
                secondary:'#4a7c23',
            },
            brown:{
                primary:'#8b4513',
            },
            cream:'#f5f4f0',
            gold:'#d4af37',
        }
    },
    fontFamily:{
        sans:['Inter','sans-serif'],
        display:['Playfair Display','serif'],
    },
    animation:{
        'bounce-slow':'bounce 3s infinite',
        'pulse-slow':'pulse 3s infinite',
        'fade-in-up':'fadeInUp 0.6s ease-out',
    },
    keyframes:{
        fadeInUp:{
            '0%':{
                opacity:'0',
                transform:'translateY(30px)'
            },
            '100%':{
                opacity:'1',
                transform:'translateY(0)'
            }
        }
    }
  },
  plugins: [
    "@tailwindcss/postcss"
  ],
}

export default config;
