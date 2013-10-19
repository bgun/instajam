App.Views.MainView = Backbone.View.extend({

	el: "#content",

	events: {
		'click .join': function() {
			console.log('new track!');
			App.router.navigate('song/track', {trigger: true});
		},
		'click .listen': function() {
			console.log('listening');
			App.router.navigate('song', {trigger: true});
		}
	},

	initialize: function() {
	},

	render: function() {
		var t = templateManager.getTemplate('main');
		this.$el.html(t);
	}

});
