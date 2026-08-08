module.exports = function(eleventyConfig) {
  // CMS
  eleventyConfig.addPassthroughCopy("admin");

  // Imágenes y otros archivos estáticos dentro de src/
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "../content"
    }
  };
};
