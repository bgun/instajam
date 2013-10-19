App.Views.MainView = Backbone.View.extend({

	el: "#main",

	events: {
		click: function() {
			console.log('new song!');
		}
	},

	initialize: function() {
	},

	render: function() {
		this.$el.html("<a href=''>Create a song.</a>");
	}

});
