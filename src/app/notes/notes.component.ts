import { 
  Component, 
  OnInit,  
  AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from '../note';
import { NoteService } from '../note.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styles: []
})
export class NotesComponent implements OnInit, AfterContentChecked {
  notes: Note[];
  selectedNote: Note;
  langToggle: any;

  constructor(
    private noteService: NoteService, 
    public router: Router,
    public sharedService: SharedService) { }

  ngOnInit(): void {
    this.getNotes();
    this.langToggle = this.sharedService.language;
  }

  ngAfterContentChecked() {
    this.lang();
  }

  lang() {
    this.langToggle = this.sharedService.language;
  }

  getNotes() {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  enableAddMode() {
    this.selectedNote = new Note();
  }

  deleteNote(note: Note) {
    this.noteService.deleteNote(note).subscribe(res => {
      this.notes = this.notes.filter(h => h !== note);
      if (this.selectedNote === note) {
        this.selectedNote = null;
      }
    });
  }

  onSelect(note: Note) {
    const redirectUrl = `/notes/${note.uid}`;

    this.selectedNote = note;
    this.router.navigate([redirectUrl]);
  }

  cancel() {
    this.selectedNote = null;
  }

  save() {
    this.noteService.addNote(this.selectedNote).subscribe(note => {
      this.selectedNote = null;
      this.notes.push(note);
    });
  }
}
