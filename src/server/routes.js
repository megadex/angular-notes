const express = require('express');
const router = express.Router();
/*
router.get('/notes', (req, res) => {
  res.send(200, [
     {"id": 10, "title": "Main", "note": "cat"}
  ])
 });
*/

const noteService = require('./note.service');

router.get('/notes', (req, res) => {
  noteService.getNotes(req, res);
});

router.get('/notes/:uid', (req, res) => {
  noteService.getNote(req, res);
});

router.post('/notes', (req, res) => {
  noteService.postNote(req, res);
});

router.put('/notes/:uid', (req, res) => {
  noteService.putNote(req, res);
});

router.delete('/notes/:uid', (req, res) => {
  noteService.deleteNote(req, res);
});

module.exports = router;
