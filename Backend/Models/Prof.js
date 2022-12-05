const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let profSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
}, {
    collection: 'profiles'
  })
module.exports = mongoose.model('Prof', profSchema)