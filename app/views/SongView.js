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
      //console.log('hello')
      trackedChanges = t.model.tracksChanged();

      //console.log(trackedChanges)


      var output = [];
      for (var i=0; i<256; i++) {
        output.push([]);
      }

      for (var i=0; i<trackedChanges.length; i++) {
        for (var j=0; j<trackedChanges[i].cells.length; j++) {
          output[trackedChanges[i].cells[j]].push(trackedChanges[i].name);
        }

      }
      //App.soundr.tick({tracks:[0]})
    
      

        //_(trackedChanges[i].cells).each(function(j) {
          
          //output[trackedChanges[i].cells[j]].push(trackedChanges[i].name);

        //});




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
