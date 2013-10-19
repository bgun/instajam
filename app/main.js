var App = {
  Collections: {},
  Models: {},
  Views: {}
};

$(function() {

  window.app = {};

  var AppRouter = Backbone.Router.extend({

    routes: {
      "song/:song/"          : "song",
      "song/:song/conductor" : "conductor",
      "song/:song/track"     : "track",
      "*actions"               : "defaultRoute"
    },

    conductor: function(songId) {
      app.views.conductor = new App.Views.ConductorView({
        foo: "bar"
      });
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
    }

  });

  var appRouter = new AppRouter();

  Backbone.history.start();

});
