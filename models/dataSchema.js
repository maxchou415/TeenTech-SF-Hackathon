const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost/hackathon-sf`)

const Schema = mongoose.Schema

const dataSchema = new Schema({
  imageUrl: { type: String },
  helpText: { type: String },
  buttonText: { type: String },
  replyText: { type: String },

  created_at: { type: Date }
})

module.exports = mongoose.model('data', dataSchema)
