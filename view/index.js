notelist = new NoteList();
noteListView = new NoteListView(notelist);
noteController = new NoteController(notelist, noteListView);
noteController.add("Favourite drink: seltzer")
noteController.insertHTML();
