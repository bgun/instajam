App.soundr = {
	init: function() {
		Gibberish.init();
		Gibberish.Time.export();
		Gibberish.Binops.export();
	},
	
	aString: function() {
		var a = new Gibberish.KarplusStrong({ damping:.6 }).connect(); 
		a.note(440);
	},
	
	startBeat: function() {
		App.soundr.beatSound = new Gibberish.Snare({ snappy: 1.5 }).connect();
	    App.soundr.beat = new Gibberish.Sequencer({
	      target:App.soundr.beatSound, key:'note',
	      values:[Gibberish.Rndf(-.05,.05)],
	      durations:[ beats( 2 ) ]
	    }).start();
	},
	
	stopBeat: function() {
		App.soundr.beat.stop();
		App.soundr.beatSound.disconnect();
	}
};
