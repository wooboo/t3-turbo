const withTM = require("next-transpile-modules")(["@the-platform/ui", "@the-platform/utils", "@the-platform/data"]);

module.exports = withTM({
  reactStrictMode: true,
});
