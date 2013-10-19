App.Views.TrackView = Backbone.View.extend({

  id: "track-view",

  tagName: "div",

  template: "track",

  events: {
  },

  initialize: function() {
    var t = this;
    t.render(t.options.songId);

    $.ajax({
      url: "app/templates/track.tmpl.html",
      async: true,
      type: "GET",
      dataType: "text",
      success: function(resp) {
        console.log(_.template(resp));
      }
    });
  },

  render: function(songId) {
    var t = this;
    console.log(songId);
  }

});
