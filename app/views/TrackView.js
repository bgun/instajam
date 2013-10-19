App.Views.TrackView = Backbone.View.extend({

  id: "track-view",

  tagName: "div",

  template: "#track-view-template",

  events: {
  },

  initialize: function() {
    var t = this;
    t.render(t.options.songId);
  },

  render: function(songId) {
    console.log(songId);
  }

});
