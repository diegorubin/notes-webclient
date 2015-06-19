var app = app || {};

app.NotesFormView = Backbone.View.extend({

  template: $('#view-note-form').html(),

  render: function() {
    var template = _.template(this.template);
  }

});

