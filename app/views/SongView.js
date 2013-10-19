App.Views.SongView = Backbone.View.extend({

  id: "songView",

  tagName: "div",

  events: {
    "click .play"  : "play",
    "click .pause" : "pause"
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

        var tuples = [];

        for (var i=0; i<trackedChanges.length; i++) {
          for (var j=0; j<trackedChanges[i].cells.length; j++) {
            if ( t.getCol( trackedChanges[i].cells[j] ) === column ) {
              tuples.push( [ trackedChanges[i].cells[j], trackedChanges[i].trackNum ] );
            }
          }
        }

        if (t.playing) {
          t.playSlice(tuples);
          t.renderSlice(column, tuples);
        }

      }

      column = (column + 1) % 16;

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

  play: function(e) {
    e.preventDefault();
    t.playing = true;
  },
  pause: function(e) {
    e.preventDefault();
    t.playing = false;
  },

  getRow: function(n) {
    return Math.floor( n/16 );
  },

  getCol: function(n) {
    return n % 16;
  },

  renderSlice: function(column, slice) {
    var t = this;

    t.$grid.find('.cell').removeClass('playing');
    t.$grid.find('.column-' + column).removeClass('selected').removeClass('player-1 player-2 player-3 player-4');
    var $cols = t.$grid.find('.column-' + column);
    $cols.addClass('playing');

    for (i in slice) {
      var $nodeToPlay = $cols.filter('.row-' + t.getRow(slice[i][0]) );
      $nodeToPlay.addClass('selected').addClass('player-' + slice[i][1]);
    }
  },

  playSlice: function(slice) {
    var t = this;
    var styles = ["synth", "synth2", "drums", "strings"];
    var output = [];

    _.each(slice, function(s) {
      output.push([ t.getRow(s[0]), styles[s[1]%4] ]);
    });

    App.soundr.tickTuple(output);

  }

});
