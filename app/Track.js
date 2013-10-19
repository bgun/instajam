App.Models.TrackModel = Backbone.Model.extend({
	defaults: {
		frames: []
	}

});

App.Collections.TrackCollection = Backbone.Collection.extend({
	model: App.Models.TrackModel//,
	// firebase: new Backbone.Firebase("https://mobilejam.firebaseio.com/songs/tracks")
});
