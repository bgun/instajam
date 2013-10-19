App.Views.SongView = Backbone.View.extend({

  tagName: "div",

  events: { },

  initialize: function() {
  	var id, t;

  	this.render();

  	t = this;
  	id = setInterval(function() {
  		t.update();
  	}, t.model.getIntervalMillis);
  },

  render: function() {
  	var template = JST['song']();

  	this.$el.html( template );
  },

  update: function() {

  }

});