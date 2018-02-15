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
    window.addEventListener("hashchange", this.changeTextAtNoteDiv);
  };

  NoteController.prototype.changeTextAtNoteDiv = function () {
    return document.getElementById("note").innerHTML = "hello"
  };


  exports.NoteController = NoteController;
})(this);
