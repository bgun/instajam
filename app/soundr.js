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
			App.soundr.trackSetup[0] = new Gibberish.PolySynth2({ attack:44800, decay:200, maxVoices:8 }).connect(); 
			
			/*App.soundr.trackSetup[12] = new Gibberish.Kick({}).connect();
			App.soundr.trackSetup[13] = new Gibberish.Snare({}).connect();
			App.soundr.trackSetup[14] = new Gibberish.Hat({}).connect();
			App.soundr.trackSetup[15] = new Gibberish.CowBell({}).connect();*/
			
			App.soundr.tracks[0] = function(){App.soundr.trackSetup[0].note(110);};
			App.soundr.tracks[1] = function(){App.soundr.trackSetup[0].note(220);};
			App.soundr.tracks[2] = function(){App.soundr.trackSetup[0].note(440);};
			App.soundr.tracks[3] = function(){App.soundr.trackSetup[0].note(880);};
			App.soundr.tracks[4] = function(){App.soundr.trackSetup[0].note(1760);};
			App.soundr.tracks[5] = function(){App.soundr.trackSetup[0].note(3520);};
			App.soundr.tracks[6] = function(){/*App.soundr.trackSetup[0].note(100);*/};
			App.soundr.tracks[7] = function(){/*App.soundr.trackSetup[0].note(100);*/};
			
			/*App.soundr.tracks[12] = function(){App.soundr.trackSetup[12].note();};
			App.soundr.tracks[13] = function(){App.soundr.trackSetup[13].note();};
			App.soundr.tracks[14] = function(){App.soundr.trackSetup[14].note();};
			App.soundr.tracks[15] = function(){App.soundr.trackSetup[15].note();};*/
			
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
