var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  item_id: { type: Schema.Types.ObjectId, ref: 'MenuItem' }
});

module.exports = mongoose.model('Order', schema);
