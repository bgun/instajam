var App = App || {
  Collections: {},
  Models: {},
  Views: {},
  settings: {
    GRID_SIZE: 16
  }
};

$(function() {
  templateManager.loadTemplates();

  var AppRouter = Backbone.Router.extend({

    routes: {
      // "song/:song"           : "song",
      // "song/:song/conductor" : "conductor",
      // "song/:song/track"     : "track",
      "song/conductor"          : "conductor",
      "song/track"              : "song",
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
  App.tracks = new App.Collections.TrackCollection();

  Backbone.history.start();

});
