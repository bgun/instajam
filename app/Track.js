App.Models.TrackModel = Backbone.Model.extend({
	defaults: {
		cells: -1,
		firebaseRef: null
	},
	initialize: function(options) {
		// add to firebase
		var tracksRef, 
			trackRef, 
			trackPath = localStorage.getItem('myTrack');

		if (!trackPath){
			tracksRef = new Firebase(App.firebase.baseUrl + 'tracks');
			trackRef = tracksRef.push({cells: -1});
			localStorage.setItem('myTrack', trackRef);
		} else {
			trackRef = new Firebase(trackPath);
		}
		this.set('firebaseRef', trackRef);
		this.on('change:cells', this.changeCells);
	},
	changeCells: function(){
		this.get('firebaseRef').set({cells: this.get('cells')});
	}
});

App.Collections.TrackCollection = Backbone.Collection.extend({
	model: App.Models.TrackModel//,
	// firebase: new Backbone.Firebase("https://mobilejam.firebaseio.com/songs/tracks")
});
