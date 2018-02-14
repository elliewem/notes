"use strict";

(function(exports) {
  function Note(text, id) {
    this._text = text;
    this._id = id
  };

  Note.prototype.text = function () {
    return this._text;
  };

  Note.prototype.id = function () {
    return this._id;
  };

  exports.Note = Note;
})(this);
