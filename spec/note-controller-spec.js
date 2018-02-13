// 'use strict';

(function(exports) {
  var noteController = new NoteController();

  (function testInstantiateNoteController () {
    assert.isA(
      noteController,
      NoteController,
      "NoteController can be instantiated"
    );
  })();

  (function testInsertHtml() {
    mockElement = {
      innerHTML: ""
    }
    noteController = new NoteController(mockElement)
    noteController.insertHTML();
    assert.isTrue(
      (noteController.element().innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>"),
      "NoteController produces list within element")
  })();

})(this);
