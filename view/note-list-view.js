"use strict";

(function(exports) {
  function NoteListView(notesList) {
    this._notesList = notesList
  };

  NoteListView.prototype.list = function() {
    var string = "<ul>"
    this._notesList.notes().forEach(function(note) {
      string += `<li><div><a href='#${note.id()}'>${note.text().substr(0, 20)}</a></div></li>`
    });
    string += "</ul>"
    return string
  };

  exports.NoteListView = NoteListView
})(this);
