App.Views.TrackView = Backbone.View.extend({

  id: "track-view",

  tagName: "div",

  template: "track",

  events: {
  },

  initialize: function() {
    var t = this;
    t.render(t.options.songId);
  },

  render: function(songId) {
    var t = this;
    console.log(songId);

    var _tmpl = _.template(templateManager.getTemplate(t.template));

    var grid = Array(12);
    for(var i=0;i<grid.length;i++) {
      grid[i] = Array(12);
    }
    var html = _tmpl({
      grid: grid
    });

    $('#content').html(html);
  }

});
