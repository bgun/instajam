App.Models.TrackModel = Backbone.Model.extend({
	defaults: {
		frames: []
	}

});

App.Collections.TrackCollection = Backbone.Firebase.Collection.extend({
	model: App.Models.TrackModel,
	firebase: new Backbone.Firebase("https://mobilejam.firebaseio.com/songs/tracks")
});
