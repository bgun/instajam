App.Models.SongModel = Backbone.Model.extend({
	defaults: {
		bpm: 80,
		tracks: new App.Collections.TrackCollection()
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
	},
	addTrack: function() {
		this.get('tracks').add({});
	}
});

// App.Collections.SongCollection = Backbone.Collection.extend({
// 	model: App.Models.SongModel//,
// 	//firebase: new Backbone.Firebase("https://mobilejam.firebaseio.com")
// });
