App.Models.TrackModel = Backbone.Model.extend({
	defaults: {
		cells: [],
		songId: null,
		firebaseRef: null
	},
	initialize: function(options) {
		// add to firebase
		var tracksRef = new Firebase(App.firebase.baseUrl + 'song/tracks');
		var trackRef = tracksRef.push().set({cells: []});
		this.set('firebaseRef', trackRef);
	},
	save: function() {

	}
});

App.Collections.TrackCollection = Backbone.Collection.extend({
	model: App.Models.TrackModel//,
	// firebase: new Backbone.Firebase("https://mobilejam.firebaseio.com/songs/tracks")
});
