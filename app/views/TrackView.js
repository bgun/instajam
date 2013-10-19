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
    var i,j;
    console.log(songId);

    var _tmpl = _.template(templateManager.getTemplate(t.template));

    var gridSize = 16;
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

    t.$el.html(_tmpl({
      grid: grid
    }));

    console.log(t.$el);

    $('#content').html(t.$el);

    $('#content').on('click','.button',function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
    });
  }

});
