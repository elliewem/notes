'use strict';

(function (exports) {
  function SingleNote(note) {
    this._note = note;
  }

  SingleNote.prototype.note = function () {
    return this._note;
  };

  SingleNote.prototype.parse = function () {
    return `<span>${this._note.text()}</span>`
  };

  exports.SingleNote = SingleNote
})(this);
