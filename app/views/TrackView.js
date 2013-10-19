App.Views.TrackView = Backbone.View.extend({

  id: "track-view",

  tagName: "div",

  events: {
  },

  initialize: function() {
    var t = this;
    t.render(t.options.songId);
    t.model = t.options.model;
    t.cells = [];
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
        selected: false
      };
    }

    var trackHtml = trackTemplate({
      subTemplate: gridTemplate({
        grid: grid
      })
    });

    t.$el.html(trackHtml);
    $('#content').html(t.$el);

    var sendCells = function(cells) {
      console.log(t.cells.length);
      console.log(t.cells);
      t.model.set({
        cells: t.cells && t.cells.length ? t.cells : -1
      });
    }
    var smartSendCells = _.debounce(sendCells, 100, true);

    $('#content').on('mouseenter','.cell',function(e) {
      e.preventDefault();
      var $t = $(this);
      var index = $t.index();

      if(grid[index].selected) {
        grid[index].selected = false;
        $t.removeClass('selected');
        t.cells = _.filter(t.cells,function(i) { return i != index; });
      } else {
        grid[index].selected = true;
        $t.addClass('selected');
        t.cells.push(index);
      }
      smartSendCells(t.cells);
    });
  }

});
