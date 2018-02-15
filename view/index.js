"use strict";

(function() {
    var notelist = new NoteList();
    var noteListView = new NoteListView(notelist);
    var noteController = new NoteController(notelist, noteListView);
    noteController.add("Favourite drink: seltzer")
    noteController.insertHTML();
    noteController.addNoteToPage();
  }
)();
