App.Models.SongModel = Backbone.Model.extend({
	defaults: {
		bpm: 80,
		tracks: [],
		firebaseRef: null,
		i:0
	},

	initialize: function() {
		var tracksRef = new Firebase(App.firebase.baseUrl + 'tracks');
		var self = this;

		var tracksRefChanged = function(snapshot) {
			var val = snapshot.val();
			var tracks = [];
			_(val).each(function(item, key){
				if (item.cells && item.cells !== -1) {
					tracks.push({
						key: key,
						name: item.name,
						cells: item.cells.split(',')
					});
				}
			});
			self.set('tracks', tracks);
		};

		tracksRef.on('child_changed', tracksRefChanged);
		tracksRef.on('value', tracksRefChanged);
		this.set('firebaseRef', tracksRef);
		this.on('change:tracks', this.tracksChanged);
	},

	tracksChanged: function() {
		var i = this.get('i');
		i++;
		this.set('i', i);
		console.log('tracksChanged', this.get('tracks'), i);
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
