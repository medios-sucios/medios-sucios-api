/**
 * Report.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	link : {
  		type : 'text',
  		unique : true,
  		primaryKey : true
  	},
  	source : {
  		model : 'source'
  	}
  }
};

