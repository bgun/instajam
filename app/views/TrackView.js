App.Views.TrackView = Backbone.View.extend({

  id: "track-view",

  tagName: "div",

  events: {
  },

  initialize: function() {
    var t = this;
    t.render(t.options.songId);
    t.model = t.options.model;
  },

  render: function() {
    var t = this;
    var i,j;

    var trackTemplate = _.template(templateManager.getTemplate("track"));
    var gridTemplate  = _.template(templateManager.getTemplate("grid"));

    var gridSize = App.settings.GRID_SIZE * App.settings.GRID_SIZE;
    var grid = Array(gridSize);
    for(i=0;i<grid.length;i++) {
      grid[i] = {
        index: i,
        active: false
      };
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
      var $t = $(this);
      var index = $t.index();

      if(grid[index].active) {
        $t.removeClass('active');
        console.log(index+" off");
      } else {
        $t.addClass('active');
        console.log(index+" on");
      }
    });
  }

});
