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

    alert('song view render');

    /*var data = templateManager.getTemplate('song');
    alert(data);

  	var template = _.template();

  	this.$el.html(
  		template({ songId: "blah" })
  	);

  	//$('#content').html(this.$el);*/
  },

  update: function() {

  }

});
