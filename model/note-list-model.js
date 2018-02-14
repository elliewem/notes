"use strict";

(function(exports) {
  function NoteList() {
    this._notes = [];
  };

  NoteList.prototype.notes = function () {
    return this._notes;
  };

  NoteList.prototype.add = function (string) {
    this._notes.push(new Note(string, this._nextNoteId()));
  };

  NoteList.prototype._nextNoteId = function () {
    return this._notes.length
  };

  exports.NoteList = NoteList;
})(this);
