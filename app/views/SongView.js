App.Views.SongView = Backbone.View.extend({

  tagName: "div",

  id: "songView",

  events: {
    //this.model.on('change')
  },

  initialize: function() {

    var id, t, trackedChanges;

    App.soundr.init();
    this.render();
    
    var t = this;

    var slice = 0;
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
    
      trackedChanges = t.model.tracksChanged();

      //console.log(trackedChanges.length)


      var output = [];
      for (var i=0; i<256; i++) {
        output.push([]);
      }

      for (var i=0; i<trackedChanges.length; i++) {
        for (var j=0; j<trackedChanges[i].cells.length; j++) {

          output[trackedChanges[i].cells[j]].push(trackedChanges[i].key);
        }

      }

      var toPlay = [];
      for (var i=0; i<256; i++) {

        if(i%16 == slice && output[i].length > 0){
          //console.log('slice', Math.floor(i/16))
          toPlay.push(Math.floor(i/16))

        }
      }
      //console.log('gets called')
      t.update(toPlay);



      slice = (slice + 1) % 16;
    }, t.model.getIntervalMillis());
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
    App.soundr.tick({tracks: songSlice})
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
