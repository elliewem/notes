'use strict';

(function(exports) {
  (function testInstantiateSingleNote () {
    var singleNote = new SingleNote();
    assert.isA(
      singleNote,
      SingleNote,
      "A single note can be instantiated"
    );
  })();

  (function testReturnSingleNote() {
    var note = {
      text: function() {return "This is my new note!"}
    }
    var mockElement = {
      innerHtml: ""
    }
    var singleNote = new SingleNote(note);
    assert.isTrue(singleNote.parse() === "<span>This is my new note!</span>", "A single note can be rendered")
  })();
})(this)
