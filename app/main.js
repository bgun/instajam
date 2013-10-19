window.App = {
  Collections: {},
  Models: {},
  Views: {},
  Songs: []
};

$(function() {
  templateManager.loadTemplates();
  var songsRef = new Firebase('https://mobilejam.firebaseio.com/songs');
  window.songsRef = songsRef;

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
      new App.Views.MainView().render();
    }

  });

  var appRouter = new AppRouter();

  Backbone.history.start();

});
