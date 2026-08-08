module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/*.css");
  eleventyConfig.addPassthroughCopy("src/*.js");

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "../content"
    }
  };
};
