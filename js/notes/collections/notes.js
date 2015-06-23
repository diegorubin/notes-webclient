var app = app || {};

app.NotesCollection = Backbone.Collection.extend({
  model: app.Note,
  url: '/'
});

