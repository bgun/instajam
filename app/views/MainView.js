App.Views.MainView = Backbone.View.extend({

	el: "#main",

	events: {
		click: function() {
			console.log('new song!');
			var song = App.songs.add({});
			var songId = song.get('id');
			App.router.navigate('song/' + songId, {trigger: true});
		}
	},

	initialize: function() {
	},

	render: function() {
		var t = templateManager.getTemplate('Main');
		this.$el.html(t);
	}

});
