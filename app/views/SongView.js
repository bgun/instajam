App.Views.SongView = Backbone.View.extend({

  tagName: "div",

  id: "songView",

  events: { },

  initialize: function() {
  	var id, t;

  	this.render();
  	
    var t = this;
    id = setInterval(function() {
  		t.update();
  	}, t.model.getIntervalMillis);
  },

  render: function() {
    var html = templateManager.getTemplate('song');

  	this.$el.html( _.template(html) );

  	$('#content').html(this.$el);
  },

  update: function() {
    //App.soundr.tick({tracks:[0,1,5]})
  }

});
