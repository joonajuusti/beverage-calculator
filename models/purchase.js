var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  store: {type: String, required: true},
  date: {type: Date, required: true},
  pepsiAmountInLitres: {type: Number, required: false},
  pepsiPriceInPurchase: {type: Number, required: false},
  monsterAmountInCans: {type: Number, required: false},
  monsterPricePerCan: {type: Number, required: false}
});

module.exports = mongoose.model('Purchase', schema);
