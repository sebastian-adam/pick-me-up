var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  cart_id: {type: String} 
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('MenuItem', schema);
