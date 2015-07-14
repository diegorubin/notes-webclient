var app = app || {};

app.NotesDashboardView = Backbone.View.extend({
  el: $('#main-container'),
  template: $('#dashboard').html(),

  initialize: function() {
    this.notes = new app.NotesCollection();
    this.notes.fetch();
  },

  events: {
    'click #note-new': 'newNote'
  },

  newNote: function(e) {
    e.preventDefault();
    var formView = new app.NotesFormView();
    formView.render();
  },

  render: function() {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl());
    return this;
  }

});

