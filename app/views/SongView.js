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

    var songTemplate = _.template(templateManager.getTemplate("song"));
    var gridTemplate = _.template(templateManager.getTemplate("grid"));
    var songHtml = songTemplate({
      gridCells: App.Utils.makeGrid(App.settings.GRID_SIZE)
    });

    t.$el.html(songHtml);
    $('#content').html(t.$el);

    $grid = this.$el.find('#grid');
    $grid.height($grid.width());
    var cellWidth = (100 / App.settings.GRID_SIZE) + "%";
    $grid.find('.cell').width(cellWidth).height(cellWidth);
  },

  renderSlice: function(slice) {
    $('.cell').removeClass('play');

    for (var i=0; i<slice.length; i++) {  
      $('#cell-' + slice[i]).addClass('play');
    }
  },

  playSlice: function(slice) {
    //App.soundr.tick({tracks: slice})
  }

});
