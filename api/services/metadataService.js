// api/services/metadataService.js
var scrape = require('html-metadata');

module.exports = {
  get: function (url) {
    return scrape(url);
  }
};