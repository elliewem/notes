"use strict";

(function(exports) {
  var noteList = new NoteList();

  (function testReturnEmptyNoteList () {
    var noteListView = new NoteListView(noteList);

    assert.isTrue(
      noteListView.list() === "<ul></ul>",
      "0 notes listed in HTML"
    );
  })();

  (function testReturnSingletonNoteList () {
    noteList.add("Hi there!");
    var noteListView = new NoteListView(noteList);

    assert.isTrue(
      noteListView.list() === "<ul><li><div><a href='#0'>Hi there!</a></div></li></ul>",
      "1 note listed in HTML"
    );
  })();

  (function testReturnManyNoteList () {
    noteList.add("Greetings!");
    var noteListView = new NoteListView(noteList);

    assert.isTrue(
      noteListView.list() === "<ul><li><div><a href='#0'>Hi there!</a></div></li><li><div><a href='#1'>Greetings!</a></div></li></ul>",
      "2 notes listed in HTML"
    );
  })();

  (function testOnlyTwentyCharacters () {
    var newNoteList = new NoteList();
    newNoteList.add("Hello, this is a great new string that the whole family can enjoy")
    var noteListView = new NoteListView(newNoteList)
    assert.isTrue(
      noteListView.list() === "<ul><li><div><a href='#0'>Hello, this is a gre</a></div></li></ul>",
      "Only the first twenty characters of a note are displayed"
    );
  })();

  (function testNoteId () {
    var newerNoteList = new NoteList();
    newerNoteList.add("This should be 0")
    assert.isTrue(
      newerNoteList.notes()[0].id() === 0,
      "Note list adds an ID of 0"
    );
  })();

  (function testSecondNoteId () {
    var superNewNoteList = new NoteList();
    superNewNoteList.add("This should be 0")
    superNewNoteList.add("This should be 1")
    assert.isTrue(
      superNewNoteList.notes()[1].id() === 1,
      "Second note in the notelist has an id of 1"
    )
  })();

})(this);
