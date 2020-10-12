module.exports = function (eleventyConfig) {

  eleventyConfig.addFilter("toJson", (value) => JSON.stringify(value, null, 2));

  return {
    dir: {
      input: "site",
      output: "dist"
    }
  };
};
