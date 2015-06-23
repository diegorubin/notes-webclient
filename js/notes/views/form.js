var app = app || {};

app.NotesFormView = Backbone.View.extend({
  el: $('#main-container'),
  template: $('#view-note-form').html(),

  events: {
    'click #note-cancel': 'cancelNote',
    'click #note-finish': 'finishNote'
  },

  cancelNote: function(e) {
    e.preventDefault();
    var dashboardView = new app.NotesDashboardView();
    dashboardView.render();
  },

  finishNote: function(e) {
    e.preventDefault();
  },

  render: function() {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl());
    var textarea = document.getElementById("note-body");
    var editor = CodeMirror.fromTextArea(textarea, {
      lineNumbers: false, mode: 'markdown'
    });
    return this;
  }

});

