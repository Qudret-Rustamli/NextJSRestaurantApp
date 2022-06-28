const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "az", "fr"],
    defaultLocale: "en",
  },
  localePath: path.resolve("./public/locales"),
};
