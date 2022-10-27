const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `../../apps/*/src/**/*.{tsx}`,
    `../../apps/*/pages/**/*.{tsx}`,
    `../../apps/*/app/**/*.{tsx}`,
    // include packages if not transpiling
    "../../packages/*/src/**/*.{tsx}",
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
