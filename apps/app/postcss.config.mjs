// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors

import postcss from "tailwind-config/postcss.config.js";
import tailwind from "tailwind-config/tailwind.config.js";
export default postcss(tailwind);
