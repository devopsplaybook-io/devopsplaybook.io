const { EleventyRenderPlugin } = require("@11ty/eleventy");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginMermaid = require("@kevingimbel/eleventy-plugin-mermaid");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  eleventyConfig.addPlugin(pluginRss, {
    posthtmlRenderOptions: {},
  });

  eleventyConfig.addJavaScriptFunction("absoluteUrl", pluginRss.absoluteUrl);
  eleventyConfig.addJavaScriptFunction("htmlToAbsoluteUrls", pluginRss.convertHtmlToAbsoluteUrls);
  eleventyConfig.addJavaScriptFunction("dateToRfc3339", pluginRss.dateToRfc3339);
  eleventyConfig.setLibrary("md", markdownIt(options));
  eleventyConfig.addPassthroughCopy("manifest.json");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("medias");
  eleventyConfig.addPassthroughCopy("sw.js");
  eleventyConfig.addPlugin(pluginMermaid, {
    extra_classes: "graph",
  });
  return {
    passthroughFileCopy: true,
    htmlTemplateEngine: "liquid",
  };
};
