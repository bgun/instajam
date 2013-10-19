App.Views.SongView = Backbone.View.extend({

  tagName: "div",

  id: "songView",

  events: { },

  initialize: function() {
  	var id, t;

  	this.render();
  	
    var t = this;
    id = setInterval(function() {
  		t.update();
  	}, t.model.getIntervalMillis);
  },

  render: function() {

    var sidebar = "<div id='sidebar'></div>";

    var gridTemplate = _.template(templateManager.getTemplate("grid"));
    var gridSize = App.settings.GRID_SIZE * App.settings.GRID_SIZE;
    var grid = Array(gridSize);

    for(i=0; i<grid.length; i++) {
      grid[i] = {
        index: i
      }
    }

  	this.$el.html( _.template(sidebar + gridTemplate({ grid: grid })));

  	$('#content').html(this.$el);
  },

  update: function() {
    //App.soundr.tick({tracks:[0,1,5]})
  }

});
