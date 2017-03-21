// api/services/webshotService.js
var webshot = require('webshot');
var q = require('q');

module.exports = {
  snap: function(url,options) {
    var deferred = q.defer();
    if(options){
      return webshot(url,'test2.png',options,done);
    }else{
      return webshot(url,'test.png',done);  
    }
    function done(err){
      console.log('downloaded');
      if(err){
        deferred.reject(err);
      }
      deferred.resolve(url);
    };
    return deferred.promise;
  },
  snapMobile: function(url) {
    var options = {
      screenSize: {
        width: 420,
        height: 550
      },
      shotSize: {
        width: 420,
        height: 550
      },
      userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)' + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
    };
    return webshotService.snap(url,options);
  }

};
