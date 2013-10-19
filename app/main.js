var App = App || {
  Collections: {},
  Models: {},
  Views: {},
  Utils: {},
  settings: {
    GRID_SIZE: 16,
    MAX_SELECTIONS_PER_TRACK: 16
  }
};

$(function() {
  templateManager.loadTemplates();
  App.song = new App.Models.SongModel();

  var AppRouter = Backbone.Router.extend({

    routes: {
      // "song/:song"           : "song",
      // "song/:song/conductor" : "conductor",
      // "song/:song/track"     : "track",
      "song"                    : "song",
      "song/conductor"          : "conductor",
      "song/track"              : "track",
      "*actions"                : "defaultRoute"
    },

    conductor: function(songId) {
      console.log('conductor', songId);
      // app.views.conductor = new App.Views.ConductorView({
      //   foo: "bar"
      // });
    },

    song: App.SongViewController.showSongView,

    track: App.TrackViewController.showTrackView,

    defaultRoute: function(actions) {
      console.log('main');
      new App.Views.MainView().render();
    }

  });

  App.router = new AppRouter();
  Backbone.history.start();

});
