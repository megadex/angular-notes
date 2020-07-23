const Note = require('./note.model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function getNotes(req, res) {
  const docquery = Note.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(notes => {
      res.status(200).json(notes);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

function getNote(req, res) {
  const originalNote = {
    uid: parseInt(req.params.uid, 10)
  };
  const docquery = Note.findOne({ uid: originalNote.uid }).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(note => {
      res.status(200).json(note);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

function postNote(req, res) {
  const originalNote = { uid: req.body.uid, title: req.body.title, note: req.body.note };
  const note = new Note(originalNote);
  note.save(error => {
    if (checkServerError(res, error)) return;
    res.status(201).json(note);
    console.log('Note created successfully!');
  });
}

function putNote(req, res) {
  const originalNote = {
    uid: parseInt(req.params.uid, 10),
    title: req.body.title,
    note: req.body.note
  };
  Note.findOne({ uid: originalNote.uid }, (error, note) => {
    if (checkServerError(res, error)) return;
    if (!checkFound(res, note)) return;

    note.title = originalNote.title;
    note.note = originalNote.note;
    note.save(error => {
      if (checkServerError(res, error)) return;
      res.status(200).json(note);
      console.log('Note updated successfully!');
    });
  });
}

function deleteNote(req, res) {
  const uid = parseInt(req.params.uid, 10);
  Note.findOneAndRemove({ uid: uid })
    .then(note => {
      if (!checkFound(res, note)) return;
      res.status(200).json(note);
      console.log('Note deleted successfully!');
    })
    .catch(error => {
      if (checkServerError(res, error)) return;
    });
}

function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
}

function checkFound(res, note) {
  if (!note) {
    res.status(404).send('Note not found.');
    return;
  }
  return note;
}

module.exports = {
  getNotes,
  getNote,
  postNote,
  putNote,
  deleteNote
};
