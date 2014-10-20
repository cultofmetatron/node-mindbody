/* the main client for managing the mindbody api */
var _ = require('lodash');


var requireKeys = function(keys, options) {
  _.each(keys, function(key) {
    if (_.isUndefined(options[key]) {
      throw new Error('key: ' + key + ' must be specified!');
    })
  }, this);

};

var createClient = function(options) {
  var client = {};
  options = options || {};
  requireKeys(['sourceCredentials'], options); //throw an error if a required key is not presesnt
  return Promise.props({
    sourceCredentials : options.sourceCredentials,
    sites : options.sites || {},
    //we include promises for creation of the sub sites here

  })

};

var activateSite = function() {


};



module.exports = Client;
