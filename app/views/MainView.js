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
		var t = templateManager.getTemplate('Main');
		this.$el.html(t);
	}

});
