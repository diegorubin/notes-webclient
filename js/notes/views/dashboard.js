var app = app || {};

app.NotesDashboardView = Backbone.View.extend({
  el: $('body'),

  initialize: function() {
  },

  events: {
    'click #note-new': 'newNote'
  },

  newNote: function(e) {
    e.preventDefault();
    alert("teste");
  }

});

