var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  cart: { type: Schema.Types.ObjectId, ref: 'Cart' }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Item', schema);
