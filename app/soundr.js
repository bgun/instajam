App.soundr = {
	tracks: [],
	trackSetup: [],
	
	tick: function(data){
		for (var i=0; i < data.tracks.length; i++) {
			App.soundr.tracks[data.tracks[i]]();
		}
	},
	
	changePreset: function(name) {
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
			
			App.soundr.trackSetup[0] = new Gibberish.PolyKarplusStrong({damping:.8, maxVoices:12}).connect();
			
			App.soundr.trackSetup[1] = new Gibberish.Kick({}).connect();
			App.soundr.trackSetup[2] = new Gibberish.Snare({}).connect();
			App.soundr.trackSetup[3] = new Gibberish.Hat({amp:2}).connect();
			App.soundr.trackSetup[4] = new Gibberish.Cowbell({amp:.3}).connect();
			
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
			
		},
	
		electro: function(){
			App.soundr.trackSetup[0] =
				new Gibberish.PolySynth({ attack:44, decay:4410, maxVoices:12}).connect();
			
			App.soundr.trackSetup[1] = new Gibberish.Kick({}).connect();
			App.soundr.trackSetup[2] = new Gibberish.Snare({}).connect();
			App.soundr.trackSetup[3] = new Gibberish.Hat({amp:2}).connect();
			App.soundr.trackSetup[4] = new Gibberish.Cowbell({amp:.3}).connect();
			
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
	
	init: function() {
		Gibberish.init();
		App.soundr.changePreset('base');
		//Gibberish.Binops.export();
	}
};

