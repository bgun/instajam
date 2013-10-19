App.Models.TrackModel = Backbone.Model.extend({
	defaults: {
		cells: -1,
		name: '',
		firebaseRef: null
	},
	initialize: function(options) {
		// connect to firebase
		var tracksRef, 
			trackRef, 
			trackPath = localStorage.getItem('myTrack');

		if (!trackPath){
			tracksRef = new Firebase(App.firebase.baseUrl + 'tracks');
			trackRef = tracksRef.push({cells: -1, name:''});
			localStorage.setItem('myTrack', trackRef);
		} else {
			trackRef = new Firebase(trackPath);
		}
		this.set('firebaseRef', trackRef);
		this.on('change:cells', this.changeCells);
		this.on('change:name', this.changeName);
	},
	changeCells: function(){
		this.get('firebaseRef').child('cells').set(this.get('cells'));
	},
	changeName: function() {
		this.get('firebaseRef').child('name').set(this.get('name'));
	}
});

App.Collections.TrackCollection = Backbone.Collection.extend({
	model: App.Models.TrackModel
});
