var App = {
  Collections: {},
  Models: {},
  Views: {}
};

$(function() {

  window.app = {};

  var backboneRouter = Backbone.Router.extend({

    routes: {
      "/song/:song/"          : "song",
      "/song/:song/conductor" : "conductor",
      "/song/:song/track"     : "track",
      "/" : "default"
    },

    conductor: function(songId) {
      app.views.conductor = new App.Views.ConductorView({
        foo: "bar"
      });
    },

    song: function(songId) {
    },

    track: App.TrackViewController.init,

    default: function() {
      alert("test");
    }

  });

  var router = new BackboneRouter;

  Backbone.history.start();

});
