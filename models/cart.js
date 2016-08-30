var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  votes: { type: Number },
  items: [{ type: Schema.types.ObjectId, ref: 'Item' }]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Cart', schema);
