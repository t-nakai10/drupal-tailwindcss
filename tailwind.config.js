module.exports = {
  content: ['./app/themes/custom/**/templates/**/*.html.twig'],
  theme: {
    extend: {
      colors: {
        test: {
          DEFAULT: '#4d535e',
        },
      },
      fontFamily: {
        body: ['"Noto Sans JP"', 'sans-serif'],
        'material-icons': 'Material Icons',
      },
      listStyleType: {
        square: 'square',
        circle: 'circle',
      },
      screens: {
        print: { raw: 'print' },
      },
    },
  },
  plugins: [],
};
