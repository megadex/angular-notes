import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable, of } from 'rxjs';

import { Note } from './note';

const api = '/api';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get<Array<Note>>(`${api}/notes`);
  }

  getNote(id: number) {
    return this.http.get<Note>(`${api}/notes/${id}`);
  }

  deleteNote(note: Note) {
    return this.http.delete(`${api}/notes/${note.uid}`, this.httpOptions);
  }

  addNote(note: Note) {
    return this.http.post<Note>(`${api}/notes/`, note, this.httpOptions);
  }

  updateNote(note: Note) {
    return this.http.put<Note>(`${api}/notes/${note.uid}`, note, this.httpOptions);
  }
}
