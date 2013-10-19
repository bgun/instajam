App.Views.SongView = Backbone.View.extend({

  id: "songView",

  tagName: "div",

  events: {
    "click .pause": "togglePause"
  },

  initialize: function() {

    var id, trackedChanges,
        column = 0
        t = this;

    App.soundr.init();
    t.render();
    t.playing = true;
    
    var intNum = 0;
    id = setInterval(function() {

      trackedChanges = t.model.tracksChanged();

      if (trackedChanges.length) {

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
          if(i%16 === column && layer[i].length > 0){
            sliceToPlay.push(Math.floor(i/16))
          }
        }

        var playerIndex = trackedChanges[intNum].trackNum;

        if(t.playing) {
          t.playSlice(sliceToPlay, playerIndex);
          //console.time("render slice");
          t.renderSlice(column, sliceToPlay, playerIndex);
          //console.timeEnd("render slice");
        }

      }

      column = (column + 1) % 16;
      intNum = (intNum < trackedChanges.length-1) ? intNum + 1 : 0

    }, t.model.getIntervalMillis());
  },

  render: function() {
    var t = this;
    var songTemplate = _.template(templateManager.getTemplate("song"));
    var songHtml = songTemplate({
      gridCells: App.Utils.makeGrid(App.settings.GRID_SIZE)
    });

    t.$el.html(songHtml);
    $('#content').html(t.$el);

    var legendView = new App.Views.LegendView({model: t.model});
    legendView.render();
    t.$grid = this.$el.find('#grid');
    t.$grid.height(t.$grid.width());
  },

  togglePause: function(e) {
    e.preventDefault();
    var t = this;
    if(t.playing) {
      t.playing = false;
      $(e.target).text('Play');
    } else {
      t.playing = true;
      $(e.target).text('Pause');
    }
  },

  renderSlice: function(column, slice, playerIndex) {
    var t = this;

    t.$grid.find('.cell').removeClass('playing');
    t.$grid.find('.column-' + column).removeClass('selected').removeClass('player-1 player-2 player-3 player-4');
    var $cols = t.$grid.find('.column-'+column);
    $cols.addClass('playing');

    for (i in slice) {
      var $nodeToPlay = $cols.filter('.row-' + slice[i]);
      $nodeToPlay.addClass('selected').addClass('player-' + playerIndex);
    }
  },

  playSlice: function(slice, playerIndex) {
    var styles = ["synth", "synth2", "drums", "strings"],
        style = styles[playerIndex % 4];

    App.soundr.tick({
      tracks: slice,
      style: style
    });

  }

});
