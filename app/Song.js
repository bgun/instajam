App.Models.SongModel = Backbone.Model.extend({
	defaults: {
		bpm: 100,
		tracks: [],
		firebaseRef: null
	},

	initialize: function() {
		var tracksRef = new Firebase(App.firebase.baseUrl + 'tracks');
		var self = this;

		var tracksRefChanged = function(snapshot) {
			var val = snapshot.val();
			var i = 0;
			var MAX_TRACKS = 2;
			var tracks = [];
			_(val).each(function(item, key){
				if (item.cells && item.cells.length && tracks.length < MAX_TRACKS) {
					tracks.push({
						trackNum: i,
						key: key,
						name: item.name,
						cells: item.cells.split(',')
					});
				}
				i++;
			});
			self.set('tracks', tracks);
		};

		tracksRef.on('child_changed', tracksRefChanged);
		tracksRef.on('value', tracksRefChanged);
		this.set('firebaseRef', tracksRef);
		this.on('change:tracks', this.tracksChanged);
	},

	tracksChanged: function() {
		return this.get('tracks');
	},

	/*
	Interval is # of millis per column in the matrix, which is a 16th note
	 - millis/min = secs/min * millis/sec = 60 * 1000 = 60,000
	 - 4 ticks (16th notes) per beat => 4 * bpm = ticks/min
	 - millis/min / ticks/min = millis/min * min/ticks = 60000/(4 * bpm)
	 - millis/tick = 15000/bpm
	*/
	getIntervalMillis: function() {
		return Math.round(15000/this.get('bpm'));
	}
});

// App.Collections.SongCollection = Backbone.Collection.extend({
// 	model: App.Models.SongModel//,
// 	//firebase: new Backbone.Firebase("https://mobilejam.firebaseio.com")
// });
