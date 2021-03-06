var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var GameSchema = new Schema({
  score: {
    success: Number,
    failure: Number
  },
  started: Boolean,
  leader: Number,
  count: Number,
  spies: Number,
  vote: [],
  players: [],
  missions: [{}]
});


module.exports = mongoose.model('Game', GameSchema);