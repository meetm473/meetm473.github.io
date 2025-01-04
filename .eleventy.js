const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginIcons = require('eleventy-plugin-icons');
const embedYouTube = require("eleventy-plugin-youtube-embed");
const pluginPDFEmbed = require('eleventy-plugin-pdfembed');
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {

  let options = {
		html: true,
		breaks: true
	};

	eleventyConfig.setLibrary("md", markdownIt(options));
  
  eleventyConfig.addPlugin(pluginPDFEmbed, {
		key: '95396ee85e3544409621eefeea8d2e06'
	});
  eleventyConfig.addPlugin(embedYouTube);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginIcons, {
    mode: 'inline',
    sources: [
              { name: 'simple', path: 'node_modules/simple-icons/icons', default: true},
              { name: 'downloaded', path: './src/img/icons'}],
    icon: {
      shortcode: 'icon',
      delimiter: ':',
      transform: async (content) => content,
      class: (name, source) => `icon icon-${name}`,
      id: (name, source) => `icon-${name}`,
      attributes: {},
      attributesBySource: {},
      overwriteExistingAttributes: true,
      errorNotFound: true,
    },
    sprite: {
      shortcode: 'spriteSheet',
      attributes: {
        class: 'sprite-sheet',
        'aria-hidden': 'true',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      extraIcons: {
        all: false,
        sources: [],
        icons: [],
      },
      writeFile: false,
    },
  });
  eleventyConfig.addPassthroughCopy('src/img')


  const {
    DateTime
  } = require("luxon");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      return DateTime.fromJSDate(dateObj, {
        zone: 'utc'
      }).toFormat('yy-MM-dd');
    });

    eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("dd-MM-yy");
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",  
    dir: { input: 'src', output: 'docs' }
    // pathPrefix: "/meetm473"
  };
};
