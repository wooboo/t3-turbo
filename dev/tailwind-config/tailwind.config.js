const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {

  content: {
    relative: true,
    files: [
      // app content
      "./src/**/*.{js,ts,jsx,tsx}",
      `../../apps/*/src/**/*.tsx`,
      // include packages if not transpiling
      "../../packages/*/src/**/*.tsx",
    ],
  },
  safelist: [
    {
      pattern: /./
    },
  ],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
  plugins: [],
};
