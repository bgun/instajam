var App = App || {
  Collections: {},
  Models: {},
  Views: {}
};

$(function() {
  templateManager.loadTemplates();

  window.app = {};

  var AppRouter = Backbone.Router.extend({

    routes: {
      // "song/:song"          : "song",
      // "song/:song/conductor" : "conductor",
      // "song/:song/track"     : "track",
      "song/conductor" : "conductor",
      "song/track"     : "track",
      "*actions"               : "defaultRoute"
    },

    conductor: function(songId) {
      console.log('conductor', songId);
      // app.views.conductor = new App.Views.ConductorView({
      //   foo: "bar"
      // });
    },

    song: function(songId) {
      console.log('song', songId);
    },

    track: function(songId) {
      console.log('track', songId);
      // will be in a separate file asap -- ben
    },

    defaultRoute: function(actions) {
      console.log('main');
      new App.Views.MainView().render();
    }

  });

  App.router = new AppRouter();
  App.songs = new App.Collections.SongCollection();

  Backbone.history.start();

});
