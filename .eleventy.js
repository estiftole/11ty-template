export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    pathPrefix: "/",
    dir: {
      input: "src",
      output: "_site"
    }
  };
}
