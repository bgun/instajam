App.Views.SongView = Backbone.View.extend({

  tagName: "div",

  id: "songView",

  events: {
    //this.model.on('change')
  },

  initialize: function() {

    var id, trackedChanges,
        slice = 0
        t = this;

    App.soundr.init();
    this.render();
    
    id = setInterval(function() {

      trackedChanges = t.model.tracksChanged();

      var layer = [];
      for (var i=0; i<256; i++) {
        layer.push([]);
      }

      for (var i=0; i<trackedChanges.length; i++) {
        for (var j=0; j<trackedChanges[i].cells.length; j++) {
          layer[trackedChanges[i].cells[j]].push(trackedChanges[i].key);
        }
      }

      var sliceToPlay = [];
      for (var i=0; i<256; i++) {
        if(i%16 === slice && layer[i].length > 0){
          sliceToPlay.push(Math.floor(i/16))
        }
      }
      t.playSlice(sliceToPlay);
      t.renderSlice(sliceToPlay);

      slice = (slice + 1) % 16;

    }, t.model.getIntervalMillis());
  },

  render: function() {
    // grid is composed of 256 divs, class `cell`
    // if selected, `selected` class
    // if playing, `playing` class

    var gridTemplate = _.template(templateManager.getTemplate("grid"));
    var grid = Array( App.settings.GRID_SIZE * App.settings.GRID_SIZE );

    for(i=0; i<grid.length; i++) {
      grid[i] = { index: i }
    }

    this.$el.html( _.template( gridTemplate({ grid: grid })) );

    $('#content').html(this.$el);
  },

  renderSlice: function(slice) {
    console.log("SLICE");
    for (var i=0; i<slice.length; i++) {
      
      $('#cell-' + slice[i]);

    }
  },

  playSlice: function(slice) {
    //App.soundr.tick({tracks: slice})
  }

});
