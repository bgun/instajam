App.Views.SongView = Backbone.View.extend({

  tagName: "div",

  events: {
  },

  initialize: function() {
  	var id,
  		t = this;

  	t.render();

  	id = setInterval(function() {
  		t.update();
  	}, 125 /*t.tempo*/);
  },

  render: function() {

  },

  update: function() {

  }

});
