App.Views.SongView = Backbone.View.extend({

  tagName: "div",

  id: "songView",

  events: { },

  initialize: function() {

    alert('sanity');
    
    var id, t,
        songObj = {
          tracks: { cells: [0, 17, 2, 19] },
          tracks: { cells: [6] },
          tracks: { cells: [192, 200] },
          tracks: { cells: [240, 244, 248, 252] }
        };

    App.soundr.init();
    this.render();
    
    var t = this;
    id = setInterval(function() {

      var slice = [];
      _.each(songObj.tracks.cells, function(i) {
        //if (songObj.tracks[i] < i*i) {
        slice.push(i);
        //}
      });

      t.update(slice);
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

    console.log(songSlice);
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
