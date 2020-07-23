import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './note/note.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoteService } from './note.service';
import { SharedService } from './shared/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    NotesComponent,
    NoteComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    NoteService,
    SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
