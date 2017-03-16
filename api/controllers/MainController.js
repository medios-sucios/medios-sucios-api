/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    metadataService.get("http://www.latribuna.hn/2016/03/18/honduras-sale-lista-negra-derechos-humanos-cidh").then(function(metadata) {
      res.json(metadata);
    });
  }
};
