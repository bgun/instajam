App.Views.SongView = Backbone.View.extend({

  tagName: "div",

  id: "songView",

  events: {
    //this.model.on('change')
  },

  initialize: function() {

    var id, t, trackedChanges

    App.soundr.init();
    this.render();
    
    var t = this;

    /*trackedChanges = [
      {
        name: 'user1',
        cells: []
      },
      {
        name: 'user1',
        cells: []
      }
    ];*/

    id = setInterval(function() {
      trackedChanges = this.model.tracksChanged();

      var output = Array(256);
      _(output).each(function(i) {
        output[i] = [];
      });

      _(trackedChanges).each(function(i) {


      });

      // [[],[],['user'],[],['user','luser']]



    }, t.model.getIntervalMillis);
  },

  render: function() {

    // grid is composed of 256 divs, class `cell`
    // if selected, `selected` class
    // if playing, `playing` class

    var sidebar = "<div id='sidebar'></div>";
    var gridTemplate = _.template(templateManager.getTemplate("grid"));
    var gridSize = App.settings.GRID_SIZE * App.settings.GRID_SIZE;
    var grid = Array(gridSize);

    for(i=0; i<grid.length; i++) {
      grid[i] = {
        index: i
      }
    }

    this.$el.html( _.template(sidebar + gridTemplate({ grid: grid })) );

    $('#content').html(this.$el);
  },

  update: function(songSlice) {
    //var testNotes = [];

    //for (var i=0; i<16; i++) {
    //  if (Math.random() < .003) {
    //    testNotes.push(i);
    //  }
    //}

    //App.soundr.tick({
      //tracks: testNotes
    //});
  }

});
