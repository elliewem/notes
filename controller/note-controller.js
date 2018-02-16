"use strict";

(function(exports) {
  function NoteController(notelist, noteListView, element = document.getElementById('app')) {
    this._noteListModel = notelist;
    this._noteListView = noteListView;
    this._element = element;
  }

  NoteController.prototype.element = function () {
    return this._element;
  };

  NoteController.prototype.add = function (string) {
    this._noteListModel.add(string);
  };

  NoteController.prototype.insertHTML = function () {
    this._element.innerHTML = this._noteListView.list();
  };

  NoteController.prototype.addNoteToPage = function () {
    window.addEventListener("hashchange", function () {this.changeTextAtNoteDiv()}.bind(this));
  };

  NoteController.prototype.changeTextAtNoteDiv = function () {
    var thisNote = new SingleNote(this.getNote(this.getNoteIDFromUrl()))
    document.getElementById("note").innerHTML = thisNote.parse();
  };

  NoteController.prototype.getNoteIDFromUrl = function() {
    return parseInt(window.location.hash.split("#")[1]);
  };

  NoteController.prototype.getNote = function (noteId) {
    var found = this._noteListModel.notes().find(function(element) {
      if (element.id() === noteId) {
        return element
      }
    })
    return found
  }

  exports.NoteController = NoteController;
})(this);
