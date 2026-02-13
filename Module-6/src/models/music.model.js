const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  uri: {
    type: String,
    requried: true,
  },
  title: {
    type: String,
    requried: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    requried: true,
  }
})

const musicModel = mongoose.model("music", musicSchema)

module.exports = musicModel;