/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brown": {
          "100": "#ECE0D1",
          "300": "#DBC1AC",
          "600": "#967259",
          "900": "#634832"
        }
      },
      boxShadow: {
        "main": "0px 1px 10px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "MorabbaLight": "Morabba Light",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold"
      },
      letterSpacing: {
        "tightest": "-0.065em"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem"
        }
      },
      backgroundImage: {
        "main-desktop": "url(../images/headerBgDesktop.webp)",
        "main-mobile": "url(../images/headerBgMobile.webp)"
      }
    },
    screens: {
      'xs': '480px',
      
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px'
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  },
  function({ addUtilities }) {
    addUtilities({
      '.scroll-smooth': {
        scrollBehavior: 'smooth',
      },
    });
  },
  require('@tailwindcss/line-clamp'),
  ],
}

