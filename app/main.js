var App = {
  Collections: {},
  Models: {},
  Views: {}
};

$(function() {

  window.app = {};

  var AppRouter = Backbone.Router.extend({

    routes: {
      "song/:song/"         : "song",
      "song/:song/conductor": "conductor",
      "song/:song/track"    : "track",
      "*actions"            : "defaultRoute"
    },

    conductor: function(songId) {
      console.log('conductor', songId);
      // app.views.conductor = new App.Views.ConductorView({
      //   foo: "bar"
      // });
    },

    song:  App.SongViewController.showSongView,

    track: App.TrackViewController.showTrackView,

    defaultRoute: function(actions) {
      console.log('main');
    }

  });

  var appRouter = new AppRouter();

  Backbone.history.start();

});
