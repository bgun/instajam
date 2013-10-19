App.Views.MainView = Backbone.View.extend({

	el: "#main",

	events: {
		'click .join': function() {
			console.log('new track!');
			this.$el.hide();
			App.router.navigate('song/track', {trigger: true});
		},
		'click .listen': function() {
			console.log('listening');
			this.$el.hide();
			App.router.navigate('song', {trigger: true});
		}
	},

	initialize: function() {
	},

	render: function() {
		var t = templateManager.getTemplate('Main');
		this.$el.show().html(t);
	}

});
