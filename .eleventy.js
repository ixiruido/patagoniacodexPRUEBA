module.exports = function(eleventyConfig) {
  // CMS
  eleventyConfig.addPassthroughCopy("admin");

  // Archivos estáticos de src/
  eleventyConfig.addPassthroughCopy("src/*.css");
  eleventyConfig.addPassthroughCopy("src/*.js");
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // Archivos estáticos que siguen estando en la raíz (para HTML originales)
  eleventyConfig.addPassthroughCopy("*.html");
  eleventyConfig.addPassthroughCopy("*.css");
  eleventyConfig.addPassthroughCopy("*.js");
  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.xml");
  eleventyConfig.addPassthroughCopy("*.txt");

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "../content"
    }
  };
};
