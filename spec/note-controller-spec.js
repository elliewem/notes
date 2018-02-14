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
    };
    var fakeNoteListView = {
      list: function() {return "<ul><li><div>Favourite drink: seltzer</div></li></ul>"}
    };
    var fakeNotelist = {};
    var noteController = new NoteController(fakeNotelist, fakeNoteListView, mockElement)
    noteController.insertHTML();
    assert.isTrue(
      (noteController.element().innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>"),
      "NoteController produces list within element")
  })();

})(this);
