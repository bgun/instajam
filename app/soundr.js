App.soundr = {
	tracks: [],
	trackSetup: [],
	
	tick: function(data){
		for (var i=0; i < data.tracks.length; i++) {
			App.soundr.tracks[data.tracks[i]]();
		}
	},
	
	setupPreset: function(name) {
		if(App.soundr.trackSetup.length > 0){
			App.soundr.deregisterTracks();
		}
		App.soundr.presets[name]();
	},
	
	deregisterTracks: function(){
		for(var i=0;i<App.soundr.trackSetup.length;i++){
			App.soundr.trackSetup[i].disconnect();
		}
		App.soundr.trackSetup = [];
	},
	
	presets: {
		base: function(){
			
			App.soundr.trackSetup[0] = new Gibberish.PolyKarplusStrong({damping:.8}).connect();
			
			App.soundr.trackSetup[1] = new Gibberish.Kick({}).connect();
			App.soundr.trackSetup[2] = new Gibberish.Snare({}).connect();
			App.soundr.trackSetup[3] = new Gibberish.Hat({amp:2}).connect();
			App.soundr.trackSetup[4] = new Gibberish.Cowbell({amp:.3}).connect();
			
			/*var freqs = [130.813, 146.832, 164.814, 195.998, 
			             220, 261.626, 293.664, 329.628,
			             391.995, 440, 523.251, 587.330];*/
			
			App.soundr.tracks[0] = function(){App.soundr.trackSetup[0].note(130.813);};
			App.soundr.tracks[1] = function(){App.soundr.trackSetup[0].note(146.832);};
			App.soundr.tracks[2] = function(){App.soundr.trackSetup[0].note(164.814);};
			App.soundr.tracks[3] = function(){App.soundr.trackSetup[0].note(195.998);};
			App.soundr.tracks[4] = function(){App.soundr.trackSetup[0].note(220);};
			App.soundr.tracks[5] = function(){App.soundr.trackSetup[0].note(261.626);};
			App.soundr.tracks[6] = function(){App.soundr.trackSetup[0].note(293.664);};
			App.soundr.tracks[7] = function(){App.soundr.trackSetup[0].note(329.628);};
			App.soundr.tracks[8] = function(){App.soundr.trackSetup[0].note(391.995);};
			App.soundr.tracks[9] = function(){App.soundr.trackSetup[0].note(440);};
			App.soundr.tracks[10] = function(){App.soundr.trackSetup[0].note(523.251);};
			App.soundr.tracks[11] = function(){App.soundr.trackSetup[0].note(587.330);};
			
			App.soundr.tracks[12] = function(){App.soundr.trackSetup[1].note();};
			App.soundr.tracks[13] = function(){App.soundr.trackSetup[2].note();};
			App.soundr.tracks[14] = function(){App.soundr.trackSetup[3].note();};
			App.soundr.tracks[15] = function(){App.soundr.trackSetup[4].note();};
			
		}
	},
	
	aString: function() {
		var a = new Gibberish.KarplusStrong({ damping:.6 }).connect(); 
		a.note(440);
		a.disconnect();
	},
	
	startBeat: function() {
		App.soundr.beatSound = new Gibberish.Snare({ snappy: 1.5 }).connect();
	    App.soundr.beat = new Gibberish.Sequencer({
	      target:App.soundr.beatSound, 
	      key:'note',
	      values:[Gibberish.Rndf(-.05,.05)],
	      durations:[ Gibberish.Time.beats( 2 ) ]
	    }).start();
	},
	
	stopBeat: function() {
		App.soundr.beat.stop();
		App.soundr.beatSound.disconnect();
	},
	
	init: function() {
		Gibberish.init();
		App.soundr.setupPreset('base');
		//Gibberish.Binops.export();
	}
};

/*
var config = {
		tick (?): 7,
		tracks: [1, 5, 10],
		filter: 'jazz'
		}
		*/
