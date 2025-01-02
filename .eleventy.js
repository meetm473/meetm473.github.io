const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginIcons = require('eleventy-plugin-icons');

module.exports = function(eleventyConfig) {
  
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

  return {
    dir: { input: 'src', output: 'docs' }
    // pathPrefix: "/meetm473"
  };
};
