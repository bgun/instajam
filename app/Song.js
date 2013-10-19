App.Models.SongModel = Backbone.Model.extend({
	defaults: {
		tracks: new App.Collections.TrackCollection()
	}
});

App.Collections.SongCollection = Backbone.Firebase.Collection.extend({
	model: App.Models.SongModel,
	firebase: new Backbone.Firebase("https://mobilejam.firebaseio.com/songs")
});
