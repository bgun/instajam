App.Views.SongView = Backbone.View.extend({

  id: "songView",

  tagName: "div",

  events: {
  },

  initialize: function() {

    var id, trackedChanges,
        column = 0
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
        var playerIndex = trackedChanges[i];
        //console.log(playerIndex);
        for (var j=0; j<trackedChanges[i].cells.length; j++) {
          layer[trackedChanges[i].cells[j]].push(trackedChanges[i].key);
        }
      }

      var sliceToPlay = [];
      for (var i=0; i<256; i++) {
        if(i%16 === column && layer[i].length > 0){
          sliceToPlay.push(Math.floor(i/16))
        }
      }

      t.renderActive(layer);
      t.playSlice(sliceToPlay);
      t.renderSlice(column, sliceToPlay, playerIndex);

      column = (column + 1) % 16;

    }, t.model.getIntervalMillis());
  },

  render: function() {
    // grid is composed of 256 divs, class `cell`
    // if selected, `selected` class
    // if playing, `playing` class

    var songTemplate = _.template(templateManager.getTemplate("song"));
    var songHtml = songTemplate({
      gridCells: App.Utils.makeGrid(App.settings.GRID_SIZE)
    });

    t.$el.html(songHtml);
    $('#content').html(t.$el);

    $grid = this.$el.find('#grid');
    $grid.height($grid.width());
  },

  renderSlice: function(column, slice, playerIndex) {
    // player-1 through player-12

    $('.cell').removeClass('playing');
    $('.column-' + column).removeClass('selected');

    $('.column-' + column).addClass('playing');
    for (i in slice) {
      var $nodeToPlay = $('.column-' + column + '.row-' + slice[i]);
      $nodeToPlay.addClass('selected').addClass('player-' + playerIndex);
    }
  },

  playSlice: function(slice) {

    // synth, synth2, drums, strings
    App.soundr.tick({
      tracks: slice,
      style: "drums"
    });

  },

  renderActive: function(activeLayer) {

  }

});
