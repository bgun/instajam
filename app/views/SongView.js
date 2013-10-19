App.Views.SongView = Backbone.View.extend({

  tagName: "div",

  id: "songView",

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
  	var template = _.template(
  		"<div id=''>
  			<div id='grid'>
  			</div>
  		</div>"
  	);

  	this.$el.html(
  		template({ songId: "blah" })
  	);

  	//$('#content').html(this.$el);
  },

  update: function() {

  }

});