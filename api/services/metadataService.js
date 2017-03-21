// api/services/metadataService.js
var scrape = require('html-metadata');

module.exports = {
  get: function(url) {

    return scrape(url);
    /*return scrape(url)
    console.log(url);
      .catch(function(e) {
        console.log(e.name, e.status);
        return(e);
      });*/
  },
  dissectUrl: function(url) {
    var regex = /(https?:\/\/)?((www\.)?([a-z]+\.[a-z]{2,3}(\.[a-z]{2,3})?))/ig
    var url = url.trim();
    var result = regex.exec(url);
    var fullUrl = result[1] ? url : 'http://' + url;
    var disection = {
      protocol: result[1],
      domain: result[4],
      fullUrl: fullUrl,
      providedUrl: url
    };
    return disection;
  }

};
