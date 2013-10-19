var App = {
  Collections: {},
  Models: {},
  Views: {},
  Songs: []
};

$(function() {
  templateManager.loadTemplates();

  window.app = {};

  var AppRouter = Backbone.Router.extend({

    routes: {
      "songs/:song"          : "song",
      "songs/:song/conductor" : "conductor",
      "songs/:song/track"     : "track",
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

  var appRouter = new AppRouter();

  Backbone.history.start();

});
