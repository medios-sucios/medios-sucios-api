/**
 * ReportController
 *
 * @description :: Server-side logic for managing reports
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  test: function(req, res) {
    metadataService.get('http://gmail.com').then(function(metadata) {
      res.json(metadata)
    });
  },
  create: function(req, res) {
    var params = req.allParams();
    var source = {};
    var metadata = {};
    if (params.url) {
      var link = metadataService.dissectUrl(params.url);
      metadataService.get(link.fullUrl)
        .then(function(_metadata) {
          metadata = _metadata;
          return Source.findOrCreate({ domain: link.domain }, link)
        })
        .then(function(source) {
          var report = { link: link.fullUrl, metadata: metadata, source: source.domain };
          if (params.comment) {
            report.comment = params.comment;
          }
          if (params.motive) {
            report.motive = params.motive;
          }
          return Report.findOrCreate({ link: report.link }, report)
        })
        .then(function(report) {
          res.json(report);
        });
    } else {
      res.json({ error: 'you must provide a url' });
    }
  }

};
