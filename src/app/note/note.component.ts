import { 
  Component, 
  OnInit, 
  AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Note } from '../note';
import { NoteService } from '../note.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styles: []
})
export class NoteComponent implements OnInit, AfterContentChecked {
  langToggle: any;
  selectedNote: Note = {
    uid: +this.route.snapshot.paramMap.get('uid'),
    title: "",
    note: ""
  };

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location,
    public sharedService: SharedService) { }

  ngOnInit(): void {
    this.getNote();
    this.langToggle = this.sharedService.language;
  }

  ngAfterContentChecked() {
    this.lang();
  }

  lang() {
    this.langToggle = this.sharedService.language;
  }

  getNote() {
    const id = +this.route.snapshot.paramMap.get('uid');
    this.noteService.getNote(id).subscribe(note => {
      this.selectedNote = note;
    });
  }

  cancel() {
    this.getNote();
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.noteService.updateNote(this.selectedNote).subscribe(() => {
      this.goBack();
    });
  }
}
