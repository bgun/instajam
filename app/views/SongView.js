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

    var gridTemplate  = templateManager.getTemplate("song"),
        sidebar = "<div id='sidebar'></div>";

  	this.$el.html( _.template(sidebar + gridTemplate) );

  	$('#content').html(this.$el);
  },

  update: function() {
    //App.soundr.tick({tracks:[0,1,5]})
  }

});
