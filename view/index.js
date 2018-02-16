"use strict";


    var notelist = new NoteList();
    var noteListView = new NoteListView(notelist);
    var noteController = new NoteController(notelist, noteListView);
    noteController.add("Favourite drink: seltzer")
    noteController.add("hello there Roly boi")
    noteController.insertHTML();
    noteController.addNoteToPage();
