var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  user_id: { type: Scheme.TypesObjectId, ref: 'User' },
  item_id: { type: Schema.Types.ObjectId, ref: 'Cart' }
});

module.exports = mongoose.model('Order', schema);
