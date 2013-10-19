App.Models.TrackModel = Backbone.Model.extend({
	defaults: {
		cells: -1,
		name: 'Unknown',
		firebaseRef: null
	},
	initialize: function(options) {
		// connect to firebase
		var tracksRef, 
			trackRef, 
			trackPath = localStorage.getItem('myTrack');

		if (!trackPath){
			tracksRef = new Firebase(App.firebase.baseUrl + 'tracks');
			trackRef = tracksRef.push({cells: this.get('cells'), name:this.get('name')});
			localStorage.setItem('myTrack', trackRef);
		} else {
			trackRef = new Firebase(trackPath);
		}
		this.set('firebaseRef', trackRef);
		this.on('change:cells', this.changeCells);
		this.on('change:name', this.changeName);
	},
	changeCells: function(){
		console.log('Track.changeCells', this.get('cells'));
		localStorage.setItem('myCells', this.get('cells'));
		this.get('firebaseRef').child('cells').set(this.get('cells'));
	},
	changeName: function() {
		this.get('firebaseRef').child('name').set(this.get('name'));
		localStorage.setItem('myName', this.get('name'));
	}
});

App.Collections.TrackCollection = Backbone.Collection.extend({
	model: App.Models.TrackModel
});
