var App = {
  Collections: {},
  Models: {},
  Views: {}
};

$(function() {

  window.app = {};

  Backbone.Router.extend({

    routes: {
      "/songs/:song/"          : "song",
      "/songs/:song/conductor" : "conductor",
      "/songs/:song/track"     : "track"
    },

    conductor: function(songId) {
      app.views.conductor = new App.Views.ConductorView({
        foo: "bar"
      });
    },

    song: function(songId) {
    }

  });

});
