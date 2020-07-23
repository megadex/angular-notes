const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    uid: { type: Number, required: true, unique: true },
    title: String,
    note: String
  },
  {
    collection: 'notes',
    read: 'nearest'
  }
);

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
