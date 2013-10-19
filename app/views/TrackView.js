App.Views.TrackView = Backbone.View.extend({

  id: "track-view",

  tagName: "div",

  events: {
  },

  initialize: function() {
    var t = this;
    t.render(t.options.songId);
  },

  render: function(songId) {
    var t = this;
    var i,j;
    console.log(songId);

    var trackTemplate = _.template(templateManager.getTemplate("track"));
    var gridTemplate  = _.template(templateManager.getTemplate("grid"));

    var gridSize = App.settings.GRID_SIZE;
    var grid = Array(gridSize);
    var index = 0;
    for(i=0;i<grid.length;i++) {
      grid[i] = Array(gridSize);
      for(j=0;j<grid[i].length;j++) {
        grid[i][j] = {
          index: index
        }
        index++;
      }
    }

    var trackHtml = trackTemplate({
      subTemplate: gridTemplate({
        grid: grid
      })
    });

    t.$el.html(trackHtml);
    $('#content').html(t.$el);

    $('#content').on('click','.cell',function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
    });
  }

});
