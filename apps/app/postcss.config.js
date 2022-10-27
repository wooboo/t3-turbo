// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors

const postcss = require("tailwind-config/postcss.config.js");
const tailwind = require("tailwind-config/tailwind.config.js");
module.exports = postcss({ ...tailwind, content: [ ...tailwind.content] });
