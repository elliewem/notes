'use strict';

(function(exports) {

  (function testInstantiateNoteController () {
    var noteController = new NoteController();
    assert.isA(
      noteController,
      NoteController,
      "NoteController can be instantiated"
    );
  })();

  (function testInsertHtml() {
    var mockElement = {
      innerHTML: ""
    }
    var notelist = new NoteList();
    var noteListView = new NoteListView(notelist);
    var noteController = new NoteController(notelist, noteListView, mockElement)
    noteController.add("Favourite drink: seltzer")
    noteController.insertHTML();
    assert.isTrue(
      (noteController.element().innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>"),
      "NoteController produces list within element")
  })();

})(this);
