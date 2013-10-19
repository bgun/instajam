App.soundr = {
	tracks: [],
	trackSetup: [],
	
	tick: function(data){
		for (var i=0; i < data.tracks.length; i++) {
			App.soundr.play['synth'][data.tracks[i]]();
		}
	},
	
	play: {
		strings: [],
		synth: [],
		drums: []
	},

	presets: {
		strings: function(){
			
			var a = new Gibberish.PolyKarplusStrong({damping:.8, maxVoices:16, amp:3}).connect();
			
			App.soundr.play.strings[15] = function(){a.note(130.813);};
			App.soundr.play.strings[14] = function(){a.note(146.832);};
			App.soundr.play.strings[13] = function(){a.note(164.814);};
			App.soundr.play.strings[12] = function(){a.note(195.998);};
			App.soundr.play.strings[11] = function(){a.note(220);};
			App.soundr.play.strings[10] = function(){a.note(261.626);};
			App.soundr.play.strings[9] = function(){a.note(293.664);};
			App.soundr.play.strings[8] = function(){a.note(329.628);};
			App.soundr.play.strings[7] = function(){a.note(391.995);};
			App.soundr.play.strings[6] = function(){a.note(440);};
			App.soundr.play.strings[5] = function(){a.note(523.251);};
			App.soundr.play.strings[4] = function(){a.note(587.330);};
			App.soundr.play.strings[3] = function(){a.note(659.255);};
			App.soundr.play.strings[2] = function(){a.note(783.991);};
			App.soundr.play.strings[1] = function(){a.note(880.000);};
			App.soundr.play.strings[0] = function(){a.note(1046.50);};
			
		},
	
		synth: function(){
			var a =
				new Gibberish.PolySynth({ amp:.7, attack:44, decay:4410, maxVoices:16}).connect();
			
			App.soundr.play.synth[15] = function(){a.note(130.813);};
			App.soundr.play.synth[14] = function(){a.note(146.832);};
			App.soundr.play.synth[13] = function(){a.note(164.814);};
			App.soundr.play.synth[12] = function(){a.note(195.998);};
			App.soundr.play.synth[11] = function(){a.note(220);};
			App.soundr.play.synth[10] = function(){a.note(261.626);};
			App.soundr.play.synth[9] = function(){a.note(293.664);};
			App.soundr.play.synth[8] = function(){a.note(329.628);};
			App.soundr.play.synth[7] = function(){a.note(391.995);};
			App.soundr.play.synth[6] = function(){a.note(440);};
			App.soundr.play.synth[5] = function(){a.note(523.251);};
			App.soundr.play.synth[4] = function(){a.note(587.330);};
			App.soundr.play.synth[3] = function(){a.note(659.255);};
			App.soundr.play.synth[2] = function(){a.note(783.991);};
			App.soundr.play.synth[1] = function(){a.note(880.000);};
			App.soundr.play.synth[0] = function(){a.note(1046.50);};

		},

		drums: function(){
			
			var a0 = new Gibberish.Kick({}).connect();
			var a1 = new Gibberish.Snare({}).connect();
			var a2 = new Gibberish.Hat({amp:2}).connect();
			var a3 = new Gibberish.Cowbell({amp:.1}).connect();
			
			App.soundr.play.synth[15] = function(){a0.note();};
			App.soundr.play.synth[14] = function(){a1.note();};
			App.soundr.play.synth[13] = function(){a2.note();};
			App.soundr.play.synth[12] = function(){a3.note();};
		}
	},
	
	init: function() {
		Gibberish.init();
		App.soundr.presets.strings();
		App.soundr.presets.synth();
		App.soundr.presets.drums();
		//Gibberish.Binops.export();
	}
};

